# 机械星球司机端小程序

git@gitlab.yaowutech.cn:g-group/frontend/g-channel-h5.git

## 开始开发

1. npm i (node v16 )
2. npm start dev (目前 m2 打包会报错)
3. 如果你想在构建代码后自动看到效果，那就用 npm run dev
4. 开发者工具（1.06.2306020 以上）- 工具 - 构建 npm
5. 找到开发者工具 -> 本地设置 -> 启用代码自动热重载选项。关闭它，重启后生效，这样就不会有代码更新不及时的问题
6. 不要把开发者工具放在扩展屏
7. (可选) npm run svg ## svg 预览
8. 接口权限配置：需要在【机械星球管理端】【系统管理】【商户管理】模块中添加相应的权限
9. devops 全流程规范 https://yaowuteam.yuque.com/staff-uoggdg/sph9ql/gx1i2t9d52si7h0w

## 环境打包

1. npm start 里面可以跟不同参数（ qa1, pre ）以切换到不同环境，切换后再进行清缓存编译打包
2. 如果判断 wx.getAccountInfoSync 得到的环境是 release，则一定是使用 现网 （gateway, mobile），保证现网代码正常
3. 在设置页面，对于开发体验版，可以自行切换环境，重新进入小程序后生效。
4. 对于开发者，也可以自行在机器中配置代理进行环境转发

## 上线前准备 list

1. 是否要上报 shouldReport
2. 环境的 url 是否正确

## todo

- [ ] 多余的 svg 及图片处理
- [x] 多余的组件处理
- [x] 环境切换方式优化
- [x] 至少成功调用一个接口（订单相关）
- [x] 代码格式化相关配置

## 架构目录

```bash
/h-driver-mini
├── config/                   # 打包配置脚本目录
└── src/                      # 小程序原代码目录，会生成dist作为开发者工具用的目录
   ├── apis/                  # 与后端对接的api定义
   ├── assets                 # PNG图片
   ├── components/            # 组件目录
   |  ├── base/               # 通用组件
   |  └── business/           # 业务组件
   ├── constants/             # 常量
   ├── pages/                 # 业务页面
   |  ├── h5/
   |  ├── home/
   |  └── login/
   ├── types/                 # 类型定义
   ├── utils/                 # 工具函数
   └── README.md              # 业务页面
```

## git 分支

```bash
feat_xxxx 具体业务分支，代码访问的后端环境，是在运行时决定的
prod    #生产
```

- 开发新功能：从 prod 新建分支开发(feat_login)
- 修复线上 bug: 从 prod 新建修复分支(fix_20230418)

## 接口文档

[开发环境](https://devgateway.yaowutech.cn/doc.html#/h-prometheus-%E5%85%AC%E5%85%B1%E6%A8%A1%E5%9D%97-%E6%9D%83%E9%99%90/%E6%9D%83%E9%99%90%E6%9C%8D%E5%8A%A1/getPermissionListUsingGET)

## UI 设计稿

- [1.0 UI 稿](https://www.figma.com/file/cxFFIp4dnHVw0TuS4qUmBS/%E6%9C%BA%E6%A2%B0%E6%98%9F%E7%90%83%E9%97%A8%E5%BA%97%E7%AB%AFAPP-5-6-7?type=design&node-id=462-4863&mode=design&t=RD6cc3RVv3aCPOeS-0)

## git commit 规范

```
build：   主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
chore：   不属于以上类型的其他类型(日常事务)
ci：      主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
docs：    文档更新
feat：    新增功能
fix：     bug 修复
perf：    性能优化
refactor：重构代码(既没有新增功能，也没有修复 bug)
revert：  回滚某个更早之前的提交
style：   不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
test：    新增测试用例或是更新现有测试

```
