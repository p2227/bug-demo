import Taro from '@tarojs/taro';
import mp from '@/apis/wx';
import { env as defaultEnv } from '../constants/env';
import { ENV_KEY } from '../constants/index';
import { RES_TOKEN_FAILURE, getTokenStr, relogin } from './login';

const currEnv = mp.getStorageSync(ENV_KEY);

export const env = currEnv || defaultEnv;

type OriginReqOption<
  T,
  U extends string | TaroGeneral.IAnyObject | ArrayBuffer = any | any,
> = Taro.request.Option<T, U>;

type ReqOption<
  T,
  U extends string | TaroGeneral.IAnyObject | ArrayBuffer = any | any,
> = OriginReqOption<T, U> & {
  showError?: boolean; // true 表示展示错误toast/modal
  raw?: boolean; // true 表示把请求原样返回（目前没用上）
  ignoreToken?: boolean; // true 表示不需要带上token
  refreshToken?: boolean; // true 表示刷新token接口本身
  toastDuration?: number; // 失败提示的保持时间
};

const { envVersion } = mp.getAccountInfoSync().miniProgram;

const rootDomain = 'xxx';
const webRootDomain = 'yyy';

const domainTuple = {
  gw: `gateway.${rootDomain}`,
  h5: `mobile.${webRootDomain}`,
};

export const isFakeEnv =
  envVersion !== 'release' &&
  env &&
  (env === 'dev' || (env as string).indexOf('qa') === 0);

const isProd =
  !env ||
  env === 'prod' ||
  env === 'production' ||
  env === 'release' ||
  envVersion === 'release';

function getDomain(en: string) {
  if (isProd) {
    return `https://${domainTuple.h5}`;
  } else {
    return `https://${en}${domainTuple.h5}`;
  }
}

function getGwDomain(en: string) {
  if (isProd) {
    return `https://${domainTuple.gw}`;
  } else {
    return `https://${en}${domainTuple.gw}`;
  }
}

export const domain = getDomain(env);
export const gwDomain = getGwDomain(env);

function makeFullURL(shortURL: string) {
  if (shortURL.indexOf('http') === 0) {
    return shortURL;
  } else {
    return mp.getEnv() === mp.ENV_TYPE.WEB
      ? `/api${shortURL}`
      : `${gwDomain}/api${shortURL}`;
  }
}

export function getTokenByURL(url: string) {
  if (url.indexOf(rootDomain)) {
    return getTokenStr();
  } else {
    return '';
  }
}

// 请求头相关的处理
export async function headerHandle(
  header: Record<string, string> = {},
  url: string,
  refreshToken: boolean,
  ignoreToken: boolean,
) {
  if (ignoreToken) return header;
  const headerUsed: Record<string, string> = { ...header };

  const Authorization = await getTokenByURL(url);
  if (Authorization) {
    Object.assign(headerUsed, { Authorization });
  }

  const flag = await mp.getStorage({ key: 'flag' });
  if (flag) {
    Object.assign(headerUsed, { 'x-flow-id': flag.data });
  }

  return headerUsed;
}

export function errorToast<T = any>(
  respRaw: any,
  config?: { toastDuration?: number },
) {
  const desc = respRaw.data.desc || '请求失败';
  const duration = config?.toastDuration ?? 1500;
  if (desc.length <= 20) {
    mp.showToast({
      icon: 'none',
      title: desc,
      duration,
    });
  } else {
    mp.showModal({
      showCancel: false,
      title: desc,
    });
  }
  return desc;
}

async function requestInner<
  RES = any,
  REQ extends string | TaroGeneral.IAnyObject | ArrayBuffer = any | any,
>(options: ReqOption<RES, REQ>) {
  const {
    showError = true,
    raw = false,
    refreshToken = false,
    ignoreToken = false,
    toastDuration = 1500,
    url,
    header = {
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
    },
    ...others
  } = options;

  const headerUsed = await headerHandle(
    header,
    url,
    !refreshToken,
    ignoreToken,
  );

  mp.log.info('request url', { url, data: others?.data, header: headerUsed });
  const t = Date.now();

  function respReport(resp: any) {
    try {
      const code = resp.data?.code || resp.statusCode || 999;
      const msg = resp.data?.desc || resp.errMsg;
      const isSuccess = code === 2000 || code === 200;

    } catch (e) {
      mp.log.error('wxdata_perf_monitor error');
    }
  }

  return new Promise<REQ>((res, rej) => {
    mp.request({
      url,
      header: headerUsed,
      timeout: 10000,
      success(resp) {
        const typeResp = resp as Taro.request.SuccessCallbackResult<REQ>;
        respReport(typeResp);
        setTimeout(
          () => mp.log.info('request resp', { url, respData: typeResp?.data }),
          1000,
        );

        if (raw) {
          res(typeResp as any);
        } else {
          const { data } = typeResp;
          if ((data as any).success) {
            res((data as any).data);
          } else {
            if ((data as any).code === RES_TOKEN_FAILURE) {
              relogin();
            }
            // setTimeout是为了跳到重新登录页面后，toast还存在
            setTimeout(() => {
              if (showError) {
                errorToast(typeResp, { toastDuration });
              }
              rej(typeResp);
            }, 100);
          }
        }
      },
      fail(err) {
        // 只有request方法本身调用失败，比如超时，才到这里，http错误不到这里
        respReport(err as any);
        mp.log.error('request error', { url, err });
        rej(err);
      },
      ...others,
    });
  });
}

type RequestOptions<
  RES = any,
  REQ extends string | TaroGeneral.IAnyObject | ArrayBuffer = any | any,
> = Omit<OriginReqOption<RES, REQ>, 'url' | 'method'>;

function request<
  RES = any,
  REQ extends string | TaroGeneral.IAnyObject | ArrayBuffer = any | any,
>(
  url: string,
  method: OriginReqOption<RES, REQ>['method'],
  options?: Omit<ReqOption<RES, REQ>, 'url' | 'method'>,
) {
  const fullURL = makeFullURL(url);
  const ret = (data?: REQ, runOptions?: RequestOptions) =>
    requestInner<RES>({
      url: fullURL,
      method,
      data,
      ...options,
      ...runOptions,
    });
  ret.url = fullURL;
  return ret;
}

export default request;
