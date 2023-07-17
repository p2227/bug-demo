import Apis from '@/apis/index';
import mp from '@/apis/wx';
import { channelType, homePage, identity, loginPage } from '@/constants/index';

import { TokenVO } from '@/types/server';

import { getCurrPageRoute, getCurrPageString } from './util';

export const TOKEN_KEY = 'ACCESS_TOKEN';
export const LAST_CUSTOMER_KEY = 'LAST_CUSTOMER';
export const ENTITIES_KEY = 'ENTITIES_LIST';
export const RES_NOT_FOUND_CODE = 3000; // 处理失败
export const RES_UNAUTHORIZED_CODE = 4010; // token过期
export const RES_PERMISSION_DENIED_CODE = 4100; // 权限不足
export const RES_INVALID_PARAMS_CODE = 4000; // 参数错误
export const RES_TOKEN_FAILURE = 4001; // Token 失效
export const RES_NO_PERMISSION_DENIED_CODE = 4003; // 不允许访问
export const RES_SECRET_INCORRECT_CODE = 4200; // 秘钥错误
export const RES_SERVER_EXCEPTION_CODE = 5000; // 服务器异常

type TokenStorage = Pick<
  TokenVO,
  'token_type' | 'access_token' | 'expires_in' | 'refresh_token'
>;

export function setToken(tokenVO: TokenVO) {
  const { access_token, token_type, expires_in, refresh_token } = tokenVO;

  return mp.setStorageSync(TOKEN_KEY, {
    token_type,
    access_token,
    expires_in: (expires_in || 1) * 1000 + Date.now(), // 后端返回的 expires_in 是一个基于秒的相对时间
    refresh_token,
  });
}

export const removeToken = () => mp.removeStorageSync(TOKEN_KEY);

export const getToken = () => mp.getStorageSync<TokenStorage>(TOKEN_KEY);

export async function getTokenStr() {
  const tokenData = getToken();
  return tokenData ? `${tokenData.token_type} ${tokenData.access_token}` : '';
}

export const isLogin = () => !!getToken();

// 页面刷新或者从其他进来，需要
/**
 *
 * @param redirect
 * @param options
 */
export const pageAuth = async (redirect = true, options?) => {
  const from = getCurrPageString(false);
  const token = getToken();
  mp.log.info('pageAuth', { redirect, options, from, token });

  if (!token) {
    redirect &&
      mp.redirectTo({
        url: `/pages/login/login?from=${from}`,
      });
    return false;
  } else {
    return true;
  }
};

/**
 * 同时处理微信登录和手机号登录
 * @param resp
 * @param from
 *
 * login -- 查主体
 *    -- 只有一个 || [订单登录等] 指定了 customerId ： 用这个进行登录
 *    -- 有多个： 查ls
 *        ls 无： 让用户选择
 *        ls 有： 是否有上次主体列表。
 *                  是： 与这次对比是否有添加
 *                        是：让用户选择
 *                        否：不判断，走下面流程
 *                  无： 是否有上次登录主体
 *                        是：用这个进行登录
 *                        否：让用户选择
 *
 */
export const processLoginData = async (
  resp: TokenVO & { openid: string },
  options?: { from?: string; autoCustomer?: boolean },
) => {
  setToken(resp);
  if (resp.openid) {
    mp.getApp().globalData.openid = resp.openid;
  }

  const from = options?.from;

  try {
    await setAllInfo2App();

    await mp.reLaunch({
      url: from || homePage,
    });
  } catch (e) {
    removeToken();
    throw e;
  }
};

export enum HomeEnterState {
  button,
  greyTag,
  purpleTag,
}

export const setUserPermission2App = async (forceUpdate = false) => {
  const app = mp.getApp();

  if (forceUpdate || !app.globalData.permission) {
    const permission = await Apis.common.permission({
      channelType,
      identity,
    });
    app.globalData.permission = permission;
  }
};

export const setUserInfo2App = async (forceUpdate = false) => {
  const app = mp.getApp();

  if (forceUpdate || !app.globalData.userInfo) {
    const userInfo = await Apis.common.useInfo();
    app.globalData.userInfo = userInfo;
  }
};

export const setAllInfo2App = async (forceUpdate = false) =>
  Promise.all([
    setUserInfo2App(forceUpdate),
    setUserPermission2App(forceUpdate),
  ]);

let currLogouting = false;
export const logout = async () => {
  const currPage = getCurrPageRoute();
  // 登录页，不再处理登出逻辑
  if (`/${currPage}` === loginPage || currLogouting) {
    return;
  }
  currLogouting = true;

  const app = mp.getApp();
  removeToken();
  app.globalData.userInfo = null;
  app.globalData.businessData = {};
  await mp.reLaunch({ url: loginPage });
  currLogouting = false;
};

export const relogin = async () => {
  await logout();
  await pageAuth();
};
