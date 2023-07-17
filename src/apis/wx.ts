import Taro from "@tarojs/taro";
import humps from "humps";

const options = Taro.getLaunchOptionsSync();
const accountInfo = Taro.getAccountInfoSync();
const { envVersion } = accountInfo.miniProgram;
const shouldReport = envVersion === "release" || options?.query?.report === "1";

interface Report {
  trackEvent: (eventId: string, config?: Record<string, any>) => void;
  wxReport: (eventId: string, config?: Record<string, any>) => void;
  init?: any;
}

const noop: (...args: any[]) => void = (...args) => {};

const log =
  shouldReport && Taro.getRealtimeLogManager
    ? Taro.getRealtimeLogManager()
    : {
        info: noop,
        warn: noop,
        error: noop,
        setFilterMsg: noop,
        addFilterMsg: noop,
      };

const report: Report = {
  trackEvent: shouldReport
    ? (eventId, config = {}) => {
        const { customerInfo, userInfo } = Taro.getApp().globalData;

        const channel = options?.query?.channel;

        const params: any =
          customerInfo && userInfo
            ? {
                isLogin: "1",
                userId: userInfo.id,
                customerId: customerInfo.id,
                nature: customerInfo.isPersonal ? "0" : "1",
                signerRealNameAuth: customerInfo.isPersonalVerify ? "1" : "0",
                enterpriseRealNameAuth: `${customerInfo.authReport}`,
              }
            : {
                isLogin: "0",
              };

        if (channel) {
          params.channel = channel;
          params.chl = channel;
        }

        const assigned = { ...params, ...config } as any;
        log.info("report", eventId, assigned);
        const decamelizeParams = humps.decamelizeKeys(assigned);
        // 对接自研埋点
        // Farm.plant({
        //   key: eventId,
        //   method: "view",
        //   params: decamelizeParams,
        // });
        Taro.reportEvent(eventId, decamelizeParams);
      }
    : noop,
  wxReport: shouldReport
    ? (eventId, config = {}) => {
        console.info("wx_report", eventId, config);
        Taro.reportEvent(eventId, humps.decamelizeKeys(config));
      }
    : noop,
};

const mp = {
  ...Taro,
  async getStorage<T = any>(option: Taro.getStorage.Option<T>) {
    try {
      const ret = await Taro.getStorage(option);
      return ret;
    } catch {
      return null;
    }
  },
  getStorageSync<T = any>(key: string) {
    try {
      return Taro.getStorageSync<T>(key);
    } catch {
      return null;
    }
  },

  uma: report,

  log: {
    info(...args: any[]) {
      console.info(...args);
      log.info(...args);
    },
    warn(...args: any[]) {
      console.warn(...args);
      log.warn(...args);
    },
    error(...args: any[]) {
      console.error(...args);
      log.error(...args);
    },
    setFilterMsg: log.setFilterMsg,
    addFilterMsg: log.addFilterMsg,
  },
};

export default mp;