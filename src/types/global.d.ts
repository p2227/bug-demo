/// <reference types="@tarojs/taro" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV:
      | 'weapp'
      | 'swan'
      | 'alipay'
      | 'h5'
      | 'rn'
      | 'tt'
      | 'quickapp'
      | 'qq'
      | 'jd';
  }
}

declare namespace Api {
  interface Res<T = null> {
    code: number;
    desc: string;
    success: boolean;
    data: T;
  }

  interface Page<T = null> {
    first: boolean;
    last: boolean;
    page: string;
    records?: T[];
    size: string;
    totalElements: string;
    totalPages: string;
  }

  interface PageRes<T = null> extends Res<Page<T>> {}

  interface PageParams {
    page: number;
    size: number;
  }

  type PagePeq<T> = {
    [P in keyof T]: T[P];
  } & PageParams;
}
