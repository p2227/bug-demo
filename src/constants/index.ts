import imgMission from '@/assets/mission.png';
import imgOrder from '@/assets/order.png';

export const homePage = '/pages/home/home';

export const loginPage = '/pages/login/login';

export const ENV_KEY = 'USER_ENV';

export const channelType = 'JXXQ_DRIVER_APPLETS';

export const identity = 'LOGISTICS_PROVIDER';

export const pathUserProtocol =
  '/pages/h5/h5?needAuth=0&url=https://static.yaowutech.cn/static/league-customer-user-protocol.html';

export const pathPrivacyPolicy =
  '/pages/h5/h5?needAuth=0&url=https://static.yaowutech.cn/static/league-customer-privacy-policy.html';

export const menus = [
  {
    icon: imgOrder, // 可为空
    permissionCode: 'ORDER',
    title: '订单管理',
    desc: '我是介绍文案我是介绍文案我是介绍文案12',
    directType: 'page', // page | native
    directUri: '/order',
  },
  {
    icon: imgMission, // 可为空
    permissionCode: 'MISSION',
    title: '我的任务',
    desc: '我是介绍文案我是介绍文案我是介绍文案',
    directType: 'page', // page | native
    directUri: '/mission',
  },
];
