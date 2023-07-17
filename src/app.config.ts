export default defineAppConfig({
  pages: ['pages/home/home'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '机械星球司机端',
    navigationBarTextStyle: 'black',
  },
  rendererOptions: {
    skyline: {
      defaultDisplayBlock: true,
      disableABTest: true,
      sdkVersionBegin: '2.32.3', // 基础库最低版本
      sdkVersionEnd: '15.255.255',
      iosVersionBegin: '2.32.3', // iOS 微信最低版本
      iosVersionEnd: '15.255.255',
      androidVersionBegin: '2.32.3', // 安卓微信最低版本
      androidVersionEnd: '15.255.255',
    },
  },
  lazyCodeLoading: 'requiredComponents',
});
