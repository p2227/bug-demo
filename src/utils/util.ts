import mp from '@/apis/wx';
import { stringify } from './serialize';

export const formatTime = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  );
};

export const formatDate = (date: Date, separator = '-') => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].map(formatNumber).join(separator);
};

const formatNumber = (n: number) => {
  const s = n.toString();
  return s[1] ? s : '0' + s;
};

export const pascalCase = (str: string) =>
  `${str.slice(0, 1).toUpperCase()}${str.slice(1)}`;

export const setTimeoutAsync = (time: number) =>
  new Promise((res) => setTimeout(res, time));

/**
 * 屏蔽id号，默认为屏蔽手机号
 *
 * @export
 * @param {*} phone
 * @param {*} [group=[3, 4, 4]]，身份证：[6, 8 ,4]
 * @return {*}
 */
export function maskStr(
  phone: string = '',
  group: number[] = [3, 4, 4],
): string {
  if (!phone) {
    return '';
  }
  const str = `${phone}`;
  const str1 = str.slice(0, group[0]);
  const str2 = str.slice(group[0], group[0] + group[1]);
  const str3 = str.slice(group[0] + group[1]);
  return `${str1}${str2.replace(/./g, '*')}${str3}`;
}

export const customerStorage = {
  async set(key: string, value: any) {
    const customerId = mp.getApp().globalData.customerInfo?.id;
    if (!customerId) {
      return null;
    }
    return mp.setStorage({
      key: `${key}_${customerId}`,
      data: value,
    });
  },
  async get(key: string) {
    const customerId = mp.getApp().globalData.customerInfo?.id;
    if (!customerId) {
      return null;
    }
    return mp.getStorage({
      key: `${key}_${customerId}`,
    });
  },
};

const tabUrl = [
  '/pages/home/home',
  '/pages/order/list',
  '/pages/setting/setting',
];

export const jumpLink = ({
  url,
  eurl,
  type,
}: {
  url: string;
  eurl: string;
  type: 'NATIVE' | 'H5';
}) => {
  if (type === 'H5') {
    url = `/pages/h5/web-view?needAuth=0&eurl=${eurl}&url=${url}`; // todo: 业务没想好这里要不要登录
    return mp.navigateTo({
      url,
    });
  }

  const dectchUrl = url.indexOf('/') === 0 ? url : `/${url}`;
  const isTab = tabUrl.some((str) => dectchUrl.startsWith(str));

  if (isTab) {
    const query = dectchUrl.split('?');
    if (query[1]) {
      mp.getApp().globalData.businessData.query = query[1];
    }
    mp.switchTab({
      url: dectchUrl,
    });
  } else {
    mp.navigateTo({
      url: dectchUrl,
    });
  }
};

export function getCurrentPage() {
  var pages = mp.getCurrentPages();
  return pages[pages.length - 1];
}

export const getCurrPageRoute = () => {
  return getCurrentPage().route;
};

export const getCurrPageString = (isRaw: boolean) => {
  const lastRoutes = getCurrentPage();
  const params = stringify(lastRoutes.options);
  const from = `/${lastRoutes.route}${params ? '?' + params : ''}`;

  return isRaw ? from : encodeURIComponent(from);
};

export const isEmpty = (value: any) =>
  value === null || value === undefined || value === '';

export const isFloatSame = (a: number, b: number) => Math.abs(a - b) < 1e-10;
