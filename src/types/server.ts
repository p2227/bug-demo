/**
 * TokenWeiXinVO，token 返回视图
 */
export interface TokenWeiXinVO {
  /**
   * 访问token
   */
  access_token?: string;
  /**
   * 过期时间
   */
  expires_in?: number;
  /**
   * jti
   */
  jti?: string;
  /**
   * 用户唯一标识
   */
  openid?: string;
  /**
   * 刷新token
   */
  refresh_token?: string;
  /**
   * 域
   */
  scope?: string;
  /**
   * 伪session id
   */
  session_id?: string;
  /**
   * token类型
   */
  token_type?: string;
  /**
   * 用户在开放平台的唯一标识符
   */
  unionid?: string;
}

/**
 * TokenVO，token 返回视图
 */
export interface TokenVO {
  /**
   * 访问token
   */
  access_token?: string;
  /**
   * 过期时间
   */
  expires_in?: number;
  /**
   * jti
   */
  jti?: string;
  /**
   * 刷新token
   */
  refresh_token?: string;
  /**
   * 域
   */
  scope?: string;
  /**
   * 伪session id
   */
  session_id?: string;
  /**
   * token类型
   */
  token_type?: string;
}

/**
 * SmsCaptchaDTO，发送短信（验证码-需要图形验证码场景）
 */
export interface SmsCaptchaDTO {
  imageCaptchaDTO: ImageCaptchaDTO;
  /**
   * 手机号码
   */
  mobile: string;
  /**
   * 验证码类型不能为空, USER_RESET_PWD:重置密码, USER_SMS_LOGIN:用户登录, USER_UPDATE_PHONE:修改手机号,
   * ENTER_CONFIRM:确认进场, EXIT_CONFIRM:确认退场
   */
  smsType: SMSType;
  /**
   * 网站类型, OPERATION_ADMIN:运营后台端, MERCHANT_WEB:商家web端,ROBOT_APPLETS:机手小程序,
   * OPERATION_ADMIN_APP:运营后台APP端, MERCHANT_APP: 商家APP端, CRM_APP: CRM-APP端,
   * CHANNEL_APPLETS：渠道小程序, CUSTOMER_APP: 客户APP端
   */
  webType: 'JXXQ_DRIVER_APPLETS';
}

/**
 * 图形验证码校验参数
 */
export interface ImageCaptchaDTO {
  /**
   * 验证校验码
   */
  captcha: string;
  /**
   * 验证码类型不能为空, USER_RESET_PWD: 重置密码, USER_SMS_LOGIN: 用户登录
   */
  imageType: ImageType;
  /**
   * UUID不能为空,
   */
  uuid: string;
}

/**
 * 验证码类型不能为空, USER_RESET_PWD: 重置密码, USER_SMS_LOGIN: 用户登录
 */
type ImageType = 'USER_RESET_PWD' | 'USER_SMS_LOGIN';

/**
 * 验证码类型不能为空, USER_RESET_PWD:重置密码, USER_SMS_LOGIN:用户登录, USER_UPDATE_PHONE:修改手机号,
 * ENTER_CONFIRM:确认进场, EXIT_CONFIRM:确认退场
 */
type SMSType =
  | 'USER_RESET_PWD'
  | 'USER_SMS_LOGIN'
  | 'USER_UPDATE_PHONE'
  | 'ENTER_CONFIRM'
  | 'EXIT_CONFIRM'
  | 'WORK_ORDER_CONFIRM'
  | 'SUSPENSION_CONFIRM'
  | 'BILL_CONFIRM';

export type WebType = 'CUSTOMER_APPLETS' | 'NEW_CUSTOMER_APPLETS';

/**
 * UserVO
 */

/**
 * 用户信息VO
 */
export interface UserVO {
  /**
   * 认证状态，UN_VERIFIED：未实名认证，VERIFIED：已实名认证
   */
  authStatus?: AuthStatus;
  /**
   * 认证状态（中文）
   */
  authStatusDesc?: string;
  /**
   * 用户id
   */
  id: string;
  /**
   * 身份
   */
  identity?: Identity;
  /**
   * 身份（中文）
   */
  identityDesc?: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 手机号
   */
  phone?: string;
}

/**
 * 认证状态，UN_VERIFIED：未实名认证，VERIFIED：已实名认证
 */
export enum AuthStatus {
  UnVerified = 'UN_VERIFIED',
  Verified = 'VERIFIED',
}

/**
 * DeptSimpleVO
 */
export interface DeptSimpleVO {
  /**
   * 部门id(与上面id字段值相同，任君选择）
   */
  deptId?: number;
  /**
   * 部门名称(与name字段值相同，任君选择）
   */
  deptName?: string;
  /**
   * id
   */
  id?: number;
  /**
   * 部门名称
   */
  name?: string;
}

/**
 * RoleSimpleVO，角色表
 */
export interface RoleSimpleVO {
  /**
   * 角色编码
   */
  code?: string;
  /**
   * 角色id
   */
  id?: number;
  /**
   * 角色名称
   */
  name?: string;
}

/**
 * 实名认证状态，UN_VERIFIED：未认证，VERIFIED：已认证
 */
export enum RealNameAuth {
  AlreadyCreatedAccount = 'ALREADY_CREATED_ACCOUNT',
  UnVerified = 'UN_VERIFIED',
  Verified = 'VERIFIED',
  Expire = 'EXPIRE',
  SoonExpire = 'SOON_EXPIRE',
}

/**
 * 状态，ENABLED：正常，DISABLED：停用
 */
export enum UserStatus {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
}

export interface FaceRealNameAuthReqVO {
  customerId: string;
  idNumber: string;
  name: string;
}

/**
 * FaceRealNameAuthVO-返回对象
 */
export interface FaceRealNameAuthVO {
  /**
   * #获取个人刷脸实名认证短链接
   * 通过TENCENT 刷脸方式获取到的认证链接，有效时长2分钟
   * 通过ESIGN 刷脸方式获取到的认证链接，有效时长10分钟
   * 通过ESIGN 刷脸方式获取到的认证链接，有效时长10分钟
   * 通过ZHIMACREDIT 刷脸方式获取到的认证链接，有效时长30分钟
   * #
   */
  authUrl?: string;
  /**
   * #链接失效时间,毫秒值#
   * 结果可能存在误差，请以实际的刷脸方式为准：
   * TENCENT 2分钟、ESIGN 10分钟、ZHIMACREDIT 30分钟#
   */
  expire?: number;
  /**
   * 微信小程序刷脸使用
   */
  faceToken?: string;
  /**
   * #实名认证流程Id#
   */
  flowId?: string;
  /**
   * #获取个人刷脸实名认证长链接
   * 通过TENCENT 刷脸方式获取到的认证链接，有效时长2分钟
   * 通过ESIGN 刷脸方式获取到的认证链接，有效时长10分钟
   * 通过ZHIMACREDIT 刷脸方式获取到的认证链接，有效时长30分钟#
   */
  originalUrl?: string;
}

/**
 * CustomerDeviceCategoryNumVO，设备数量
 */
export interface CustomerDeviceCategoryNumVO {
  /**
   * 设备类型
   */
  deviceCategory?: string;
  /**
   * 数量
   */
  num?: number;
}

/**
 * 签约方式，ONLINE_SIGN：线上签约，OFFLINE_SIGN：线下签约
 */
export enum SignMethod {
  OfflineSign = 'OFFLINE_SIGN',
  OnlineSign = 'ONLINE_SIGN',
}

/**
 *
 * #订单状态#ENUM#WAIT_START_SIGN:待发起签约,WAIT_SIGN:待签约,APPROVE_IN:审批中,APPROVE_NO_PASS:审批不通过,COMPLETED_SIGN:已签约,CANCEL:已取消#
 */
export enum OrderStatus {
  ApproveIn = 'APPROVE_IN',
  ApproveNoPass = 'APPROVE_NO_PASS',
  Cancel = 'CANCEL',
  CompletedSign = 'COMPLETED_SIGN',
  WaitSign = 'WAIT_SIGN',
  WaitStartSign = 'WAIT_START_SIGN',
  End = 'END',
}

/**
 * 订单分段签约信息
 */
export interface StageSigning {
  /**
   * 换签截止时间
   */
  changeSignExpDate?: Date;
  /**
   * 个人签署人ID
   */
  personalSignerId?: number;
  /**
   * 个人签署人身份证号
   */
  personalSignerIdNumber?: string;
  /**
   * 个人签署人姓名
   */
  personalSignerName?: string;
  /**
   * 个人签署人电话
   */
  personalSignerPhone?: string;
  /**
   * 个人合同签约方式：ONLINE_SIGN - 线上签约，OFFLINE_SIGN 线下签约
   */
  personalSignMethod?: SignMethod;
  /**
   * 个人合同签约方式描述
   */
  personalSignMethodDesc?: string;
  /**
   * 个人合同签约状态
   */
  personalSignStatus?: number;
  /**
   * 个人合同签约状态描述
   */
  personalSignStsDesc?: string;
  /**
   * 分段签约状态：0-未签约；1-个人签约完成；2-企业签约完成
   */
  stageSigningStatus?: number;
  /**
   * 分段签约状态描述
   */
  stageSigningStatusDesc?: string;
}

/**
 * CustomerOrderDetailsVO，客端订单详情
 */
export interface CustomerOrderDetailsVO {
  stageSigning?: StageSigning;
  /**
   * 订单是否分段签约标志位
   */
  stageSigningFlag?: boolean;

  creditRating: string;

  basic?: CustomerOrderBasicVO;
  haveSign?: boolean;
  releaseAmountFlag?: boolean;
  /**
   * #商机id#
   */
  businessId?: number;
  /**
   * #取消原因#
   */
  cancelReason?: string;
  /**
   * #取消时间#
   */
  cancelTime?: Date;
  /**
   * #取消原因子类型#
   */
  causeSubType?: CauseSubType;
  /**
   * #取消原因类型#
   */
  causeType?: CauseType;
  /**
   * 订单编号
   */
  code?: string;
  construction?: CustomerOrderConstructionVO;
  /**
   * 合同附件
   */
  contractAttachmentList?: FileDTO[];
  /**
   * #合同id#
   */
  contractId?: number;
  /**
   * #框架合同签署日期#
   */
  contractSignDate?: Date;
  /**
   * #合同状态#ENUM#WAIT_SIGN:待签约,HAVE_SIGN:已签约#
   */
  contractStatus?: ContractStatus;
  /**
   * 合同状态（中文）
   */
  contractStatusDesc?: string;
  /**
   * 合作模式, SUBLET_MODE：转租模式，INTERMEDIATE_MODE：居间模式
   */
  cooperationMode: CooperationMode;
  /**
   * 合作模式（中文）
   */
  cooperationModeDesc?: string;
  /**
   * 风险与费用分担信息
   */
  costs?: CustomerOrderCostVO[];
  /**
   * #创建时间#
   */
  createTime?: Date;
  /**
   * #创建人#
   */
  creator?: string;
  /**
   * #客户id#
   */
  customerId?: string;
  /**
   * 设备信息
   */
  devices?: CustomerOrderDeviceVO[];
  eorderAttachmentList?: FileDTO[];
  /**
   * #订单id#
   */
  id: string;
  /**
   * 客户端订单签约状态描述
   */
  merchantsBdName?: string;
  /**
   * 客户端订单签约状态描述
   */
  merchantsBdPhone?: string;
  /**
   * 订单附件
   */
  orderAttachmentList?: FileDTO[];
  /**
   *
   * 订单合同类型STANDARD_ORDER_CONTRACTS:标准合同ZERO_RENTAL_ORDER_CONTRACTS:零租合同THIRD_PARTY_ORDER_CONTRACTS:他方合同
   */
  orderContractsType?: OrderContractsType;
  orderContractsTypeDesc?: string;
  /**
   * #已申请进场台量#
   */
  orderDeviceDispatchedNum?: number;
  /**
   * #订单台量#
   */
  orderDeviceNum?: number;
  /**
   * 大区门店
   */
  regionName?: string;
  /**
   * #在租设备总数量#
   */
  rentingNum?: number;
  /**
   * #销售BD id#
   */
  salesBdId?: number;
  /**
   * #销售BD名称#
   */
  salesBdName?: string;
  settlementInvoiceTerms?: CustomerOrderSettlementInvoiceTermsDTO;
  /**
   * #签约日期#
   */
  signDate?: Date;
  /**
   * #签约方式#ENUM#ONLINE_SIGN：线下签约，OFFLINE_SIGN：线上签约#
   */
  signMethod?: SignMethod;
  /**
   * #签约方式（中文）#
   */
  signMethodDesc?: string;
  /**
   * 客户端订单签约状态
   */
  signProgress?: SignProgress;
  /**
   * 客户端订单签约状态描述
   */
  signProgressDesc?: string;
  /**
   * #审批编号#
   */
  spNo?: string;
  /**
   *
   * #订单状态#ENUM#WAIT_START_SIGN::待发起签约WAIT_SIGN::待签约APPROVE_IN::审批中APPROVE_NO_PASS::审批不通过COMPLETED_SIGN::已签约CANCEL::已取消
   */
  status?: OrderStatus;
  /**
   * 订单状态（中文）
   */
  statusDesc?: string;
  /**
   *
   * #订单状态#ENUM#WAIT_START_SIGN::待发起签约WAIT_SIGN_ONLINE::待签约（线上）WAIT_SIGN_OFFLINE::待签约（线下）APPROVE_IN_OFFLINE::审批中（线下）APPROVE_NO_PASS_OFFLINE::审批不通过（线下）COMPLETED_SIGN_ONLINE::已签约（线上）COMPLETED_SIGN_OFFLINE::已签约（线下）CANCEL::已取消
   */
  statusForPC?: StatusForPC;
  /**
   * 订单状态（中文）
   */
  statusForPCDesc?: string;
  /**
   * 平台主体id
   */
  subjectId?: number;
  /**
   * 平台主体名称
   */
  subjectName?: string;
  valuation?: CustomerOrderValuationVO;
}

/**
 * CustomerOrderBasicVO，客端订单基本信息
 */
export interface CustomerOrderBasicVO {
  /**
   * 授权人
   */
  authorizers?: CustomerOrderAuthorizerVO[];
  /**
   * #出租方通讯地址#
   */
  partyAAddress?: string;
  /**
   * #甲方联系人#
   */
  partyAContacts?: string;
  /**
   * #出租方签约主体id#
   */
  partyAId?: number;
  /**
   * #出租方法人代表#
   */
  partyALegalPerson?: string;
  /**
   * #出租方签约主体名称#
   */
  partyAName?: string;
  /**
   * #出租方nature ENTERPRISE, PERSONAL#
   */
  partyANature?: PartyNature;
  /**
   * #甲方联系方式#
   */
  partyAPhone?: string;
  /**
   * #出租方统一社会信用代码#
   */
  partyAUnifiedSocialCreditCode?: string;
  /**
   * #承租方通讯地址#
   */
  partyBAddress?: string;
  /**
   * #乙方联系人#
   */
  partyBContacts?: string;
  /**
   * #承租方法人代表#
   */
  partyBLegalPerson?: string;
  /**
   * #承租方名称#
   */
  partyBName?: string;
  /**
   * #承租方nature ENTERPRISE, PERSONAL#
   */
  partyBNature?: PartyNature;
  /**
   * #乙方联系方式#
   */
  partyBPhone?: string;
  /**
   * #承租方合同签署人身份证#
   */
  partyBSignerIdNumber?: string;
  /**
   * #承租方合同签署人姓名#
   */
  partyBSignerName?: string;
  /**
   * #承租方合同签署人手机号码#
   */
  partyBSignerPhone?: string;
  /**
   * #承租方统一信用代码/身份证#
   */
  partyBUnifiedSocialCreditCode?: string;
}

/**
 * CustomerOrderAuthorizerVO，客户现场授权人
 */
export interface CustomerOrderAuthorizerVO {
  /**
   * 授权人身份证
   */
  authorizerIdNumber?: string;
  /**
   * 授权人名称
   */
  authorizerName?: string;
  /**
   * 授权人手机号
   */
  authorizerPhone?: string;
  /**
   * 授权人id
   */
  id: number;
}

/**
 * #出租方nature ENTERPRISE, PERSONAL#
 *
 * #承租方nature ENTERPRISE, PERSONAL#
 */
export enum PartyNature {
  Enterprise = 'ENTERPRISE',
  Personal = 'PERSONAL',
}

/**
 * #取消原因子类型#
 */
export enum CauseSubType {
  BigClientBiddingFailed = 'BIG_CLIENT_BIDDING_FAILED',
  CustomerLostContactOrAbandoned = 'CUSTOMER_LOST_CONTACT_OR_ABANDONED',
  CustomerSimpleInquiry = 'CUSTOMER_SIMPLE_INQUIRY',
  CustomerSwitchConstructionMode = 'CUSTOMER_SWITCH_CONSTRUCTION_MODE',
  EquipmentTimelinessLag = 'EQUIPMENT_TIMELINESS_LAG',
  FieldAreaNoMerchantsSupport = 'FIELD_AREA_NO_MERCHANTS_SUPPORT',
  FreightMismatch = 'FREIGHT_MISMATCH',
  JobScenariosNotMet = 'JOB_SCENARIOS_NOT_MET',
  LocalAreaNoMerchantsSupport = 'LOCAL_AREA_NO_MERCHANTS_SUPPORT',
  PaymentDaysNotSatisfied = 'PAYMENT_DAYS_NOT_SATISFIED',
  PriceMismatchCustomerMatch = 'PRICE_MISMATCH_CUSTOMER_MATCH',
  PriceMismatchCustomerMismatch = 'PRICE_MISMATCH_CUSTOMER_MISMATCH',
  QualificationNotComplete = 'QUALIFICATION_NOT_COMPLETE',
  SuppliersNotPutStorageInTime = 'SUPPLIERS_NOT_PUT_STORAGE_IN_TIME',
  TimelinessMismatch = 'TIMELINESS_MISMATCH',
  TimelinessTrouble = 'TIMELINESS_TROUBLE',
}

/**
 * #取消原因类型#
 */
export enum CauseType {
  BusinessPolicy = 'BUSINESS_POLICY',
  CustomerReason = 'CUSTOMER_REASON',
  InsufficientCompanySupport = 'INSUFFICIENT_COMPANY_SUPPORT',
  MatchReason = 'MATCH_REASON',
  Other = 'OTHER',
}

/**
 * CustomerOrderConstructionVO，客户订单施工信息
 */
export interface CustomerOrderConstructionVO {
  /**
   * 施工地点
   */
  address?: string;
  /**
   * 城市编号
   */
  cityCode?: string;
  /**
   * 城市名称
   */
  cityName?: string;
  /**
   * 施工内容(中文)
   */
  constructionContentTypeDescList?: string[];
  /**
   * #设备交付方式#ENUM#0:出租方负责运输:LESSOR,1:承租方负责运输:LESSEE#
   */
  deliveryMethod?: DeliveryMethod;
  /**
   * #设备交付方式（中文）#
   */
  deliveryMethodDesc?: string;
  /**
   * #离场日期#
   */
  departureDate?: Date;
  /**
   * 区域编号
   */
  districtCode?: string;
  /**
   * 区域名称
   */
  districtName?: string;
  /**
   * #进场日期#
   */
  entryDate?: Date;
  /**
   * #进场费用#
   */
  entryFee?: number;
  /**
   * 支付条款, RENT_PREPAID: 租金先付, RENT_DEFERRED: 租金后付
   */
  paymentTerms?: PaymentTerms;
  /**
   * 支付条款（中文）
   */
  paymentTermsDesc?: string;
  projectAddr?: MapDTO;
  /**
   * 施工内容, 施工内容选择其他时传值
   */
  projectContent?: string;
  /**
   * 工程id
   */
  projectId?: number;
  /**
   * 工程名称
   */
  projectName?: string;
  provinceCode?: string;
  provinceName?: string;
}

/**
 * #设备交付方式#ENUM#0:出租方负责运输:LESSOR,1:承租方负责运输:LESSEE#
 */
export enum DeliveryMethod {
  Lessee = 'LESSEE',
  Lessor = 'LESSOR',
}

/**
 * 支付条款, RENT_PREPAID: 租金先付, RENT_DEFERRED: 租金后付
 */
export enum PaymentTerms {
  RentDeferred = 'RENT_DEFERRED',
  RentPrepaid = 'RENT_PREPAID',
}

/**
 * 地图地址-对象
 */
export interface MapDTO {
  /**
   * #地址#
   */
  address: string;
  /**
   * #地址标题#
   */
  addressTitle: string;
  /**
   * #纬度#
   */
  lat: string;
  /**
   * #经度#
   */
  lng: string;
}

/**
 * FileDTO-对象，文件信息表
 */
export interface FileDTO {
  /**
   * #拓展名#
   */
  extension?: string;
  /**
   * #文件类型#
   */
  fileType?: string;
  /**
   * #文件id#
   */
  fileId?: number;
  /**
   * #文件名#
   */
  fileName: string;
  /**
   * #url#
   */
  url: string;
  fileUrl?: string;
}

/**
 * #合同状态#ENUM#WAIT_SIGN:待签约,HAVE_SIGN:已签约#
 */
export enum ContractStatus {
  ApproveFail = 'APPROVE_FAIL',
  Cancelled = 'CANCELLED',
  HaveSign = 'HAVE_SIGN',
  Performed = 'PERFORMED',
  Performing = 'PERFORMING',
  WaitApprove = 'WAIT_APPROVE',
  WaitPerform = 'WAIT_PERFORM',
  WaitSign = 'WAIT_SIGN',
}

/**
 * 合作模式, SUBLET_MODE：转租模式，INTERMEDIATE_MODE：居间模式
 */
export enum CooperationMode {
  IntermediateMode = 'INTERMEDIATE_MODE',
  SubletMode = 'SUBLET_MODE',
}

/**
 * CustomerOrderCostVO，客户订单风险与费用分担信息
 */
export interface CustomerOrderCostVO {
  /**
   * 费用id
   */
  costId?: number;
  /**
   * 费用条目
   */
  costName?: string;
  /**
   * 金额（元）
   */
  money?: number;
  /**
   * #承担对象#ENUM#PARTY_A：平台，PARTY_B: 客户#
   */
  undertakeObject?: UndertakeObject;
  /**
   * 承担对象code
   */
  undertakeObjectCode?: string;
  /**
   * 承担对象（中文）
   */
  undertakeObjectDesc?: string;
}

/**
 * #承担对象#ENUM#PARTY_A：平台，PARTY_B: 客户#
 */
export enum UndertakeObject {
  PartyA = 'PARTY_A',
  PartyB = 'PARTY_B',
}

/**
 * CustomerOrderDeviceVO，客户订单设备信息
 */
export interface CustomerOrderDeviceVO {
  /**
   * 品牌id
   */
  brandId?: number;
  /**
   * 品牌名称
   */
  brandName?: string;
  /**
   * #客端订单id#
   */
  customerOrderId?: number;
  /**
   * 不含税日租单价
   */
  dayPrice?: number;
  /**
   * #所有设备品类id#
   */
  deviceAllCategoryIds?: number[];
  /**
   * #所有设备品类名称#
   */
  deviceAllCategoryNames?: string[];
  /**
   * #设备品类图片url（主图/首图）#
   */
  deviceCategoryIconUrl?: string;
  /**
   * 设备品类
   */
  deviceCategoryId?: number;
  /**
   * 设备品类名称
   */
  deviceCategoryName?: string;
  /**
   * 设备名称
   */
  deviceName?: string;
  /**
   * 设备参数信息
   */
  deviceParameters?: DeviceParamsVO[];
  /**
   * #已调度设备数量#
   */
  dispatchedNum?: number;
  /**
   * 干租、按月 - 月累计工作时限
   */
  dryLeaseMonthWorkTime?: number;
  /**
   * 干租、按月 - 超时费用
   */
  dryLeaseOvertimeFee?: number;
  /**
   * 预计进场时间，格式：yyyy-MM-dd
   */
  entryDate?: Date;
  /**
   * 设备id
   */
  id?: number;
  /**
   * 单台起步价
   */
  initPrice?: number;
  /**
   * 预计租赁时长，计价方式：按月、按日、台班时必填
   */
  leasingDays?: number;
  /**
   * #预计租赁时长单位#ENUM#按月:MONTH, 台班:MACHINE_TEAM, 按日:DAY, 其他:OTHER#
   */
  leasingDaysUnit?: LeasingDaysUnit;
  /**
   * #预计租赁时长单位（中文）#
   */
  leasingDaysUnitDesc?: string;
  /**
   * #租赁模式#ENUM#干租:DRY_LEASE, 湿租:WET_LEASE#
   */
  leasingModel?: LeasingModel;
  /**
   * #租赁模式#ENUM#0:干租:DRY_LEASE,1:湿租:WET_LEASE#
   */
  leasingModelCode?: string;
  /**
   * 租赁模式（中文）
   */
  leasingModelDesc?: string;
  /**
   * #租赁模式#ENUM#0:干租:DRY_LEASE,1:湿租:WET_LEASE#
   */
  leasingModelName?: string;
  /**
   * 不含税台班单价
   */
  machineTeamPrice?: number;
  /**
   * 湿租、按月/台班 - 台班-单位设备台数
   */
  machineTeamUnitDeviceNum?: number;
  /**
   * 湿租、按月/台班 - 台班-单位设备操作员数
   */
  machineTeamUnitOperatorNum?: number;
  /**
   * 单台保底金额
   */
  minimumPrice?: number;
  /**
   * 单台保底时长,计价方式：按月、按日、台班时必填
   */
  minimumTime?: number;
  /**
   * #单台保底时长单位#ENUM#月:MONTH, 台班:MACHINE_TEAM, 按日:DAY#
   */
  minimumTimeUnit?: LeasingDaysUnit;
  /**
   * #单台保底时长单位（中文）#
   */
  minimumTimeUnitDesc?: string;
  /**
   * 单台保底工作量，计价方式：其他时必填，单位取单价的单位
   */
  minimumWorkload?: number;
  /**
   * 型号
   */
  model?: string;
  /**
   * 不含税月租单价
   */
  monthPrice?: number;
  /**
   * 台数
   */
  num?: number;
  /**
   * 不含税单价，计价方式为[其他]时必填
   */
  price?: number;
  /**
   * #报价是否含税#ENUM#含税:TAX_INCLUSIVE, 不含税:NOT_TAX_INCLUSIVE#
   */
  quoteTax?: QuoteTax;
  /**
   * 报价是否含税（中文）
   */
  quoteTaxDesc?: string;
  /**
   * 含税日租单价
   */
  taxDayPrice?: number;
  /**
   * 含税台班单价
   */

  taxHourPrice?: number;

  taxMachineTeamPrice?: number;
  /**
   * 含税月租单价
   */
  taxMonthPrice?: number;
  /**
   * 含税单价，计价方式为[其他]时必填
   */
  taxPrice?: number;
  /**
   * 租金税率
   */
  taxRate?: number;
  /**
   * 单价的单位
   */
  unit?: string;
  /**
   * #计价方式#ENUM#包月:MONTH, 台班:MACHINE_TEAM, 按日:DAY, 按小时:HOUR, 其他:OTHER#
   */
  valuationWay?: LeasingDaysUnit;
  /**
   * #计价方式#ENUM#0:包月:MONTH,1:台班:MACHINE_TEAM,2:按日:DAY,3:按小时:HOUR,4:其他:OTHER#
   */
  valuationWayCode?: string;
  /**
   * 计价方式（中文）
   */
  valuationWayDesc?: string;
  /**
   * #计价方式#ENUM#0:包月:MONTH,1:台班:MACHINE_TEAM,2:按日:DAY,3:按小时:HOUR,4:其他:OTHER#
   */
  valuationWayName?: string;
  /**
   * 湿租、按月 - 日累计工作时限
   */
  wetLeaseDayWorkTime?: number;
  /**
   * 湿租、按月 - 月累计工作时限
   */
  wetLeaseMonthWorkTime?: number;
  /**
   * 湿租、按月/台班 - 夜间施工费
   */
  wetLeaseNightConstructionCost?: number;
  /**
   * 湿租、按月/台班 - 夜间施工结束时间, 格式:HH:mm
   */
  wetLeaseNightConstructionEndTime?: string;
  /**
   * 湿租、按月/台班 - 夜间施工开始时间, 格式:HH:mm
   */
  wetLeaseNightConstructionStartTime?: string;
  /**
   * 湿租、按月 - 超时费用
   */
  wetLeaseOvertimeFee?: number;
  /**
   * 预计工作量，计价方式：其他时必填，单位取单价的单位
   */
  workload?: number;

  threeOrTwoPreferentialPolicy?: boolean;

  tags?: string[];
}

/**
 * DeviceParamsVO
 */
export interface DeviceParamsVO {
  /**
   * 设备规格参数id
   */
  deviceParamId?: number;
  /**
   * 设备规格参数名称
   */
  deviceParamName?: string;
  /**
   * 参数值
   */
  deviceParamValue?: number;
  /**
   * 计量单位id
   */
  unitId?: number;
  /**
   * 计量单位
   */
  unitName?: string;
}

/**
 * #预计租赁时长单位#ENUM#按月:MONTH, 台班:MACHINE_TEAM, 按日:DAY, 其他:OTHER#
 *
 * #单台保底时长单位#ENUM#月:MONTH, 台班:MACHINE_TEAM, 按日:DAY#
 *
 * #计价方式#ENUM#包月:MONTH, 台班:MACHINE_TEAM, 按日:DAY, 按小时:HOUR, 其他:OTHER#
 */
export enum LeasingDaysUnit {
  Day = 'DAY',
  Hour = 'HOUR',
  MachineTeam = 'MACHINE_TEAM',
  Month = 'MONTH',
  Cubic = 'CUBIC',
  Wade = 'WADE',
  Ton = 'TON',
  Other = 'OTHER',
}

/**
 * #租赁模式#ENUM#干租:DRY_LEASE, 湿租:WET_LEASE#
 */
export enum LeasingModel {
  All = 'ALL',
  DryLease = 'DRY_LEASE',
  WetLease = 'WET_LEASE',
}

/**
 * #报价是否含税#ENUM#含税:TAX_INCLUSIVE, 不含税:NOT_TAX_INCLUSIVE#
 */
export enum QuoteTax {
  NotTaxInclusive = 'NOT_TAX_INCLUSIVE',
  TaxInclusive = 'TAX_INCLUSIVE',
}

/**
 *
 * 订单合同类型STANDARD_ORDER_CONTRACTS:标准合同ZERO_RENTAL_ORDER_CONTRACTS:零租合同THIRD_PARTY_ORDER_CONTRACTS:他方合同
 */
export enum OrderContractsType {
  StandardOrderContracts = 'STANDARD_ORDER_CONTRACTS',
  ThirdPartyOrderContracts = 'THIRD_PARTY_ORDER_CONTRACTS',
  ZeroRentalOrderContracts = 'ZERO_RENTAL_ORDER_CONTRACTS',
}

/**
 * CustomerOrderSettlementInvoiceTermsDTO-请求参数，结算、开票及其他条款信息
 */
export interface CustomerOrderSettlementInvoiceTermsDTO {
  /**
   * 签订之日先付金额,结算付款方式为【用车完结付】时必传
   */
  contractSigningBeforePay?: number;
  /**
   * 合同签订当天支付金额,结算付款方式为【设备到场前付】时必传
   */
  contractSigningPay?: number;
  /**
   * 设备进场当天支付订单的剩余款项金额，结算付款方式为【设备到场前付】时必传
   */
  deviceEnterAfterPay?: number;
  /**
   * 设备全部退场多少天后支付所有款项,结算付款方式为【按期付款】时必传
   */
  deviceExitAfterDay?: number;
  /**
   * #开票节点#ENUM#先付款后开票:FIRST_PAY_LAST_INVOICE, 先开票后付款:FIRST_INVOICE_LAST_PAY#
   */
  invoiceNode?: InvoiceNode;
  /**
   * 开票节点
   */
  invoiceNodeDesc?: string;
  /**
   * #开票类型#ENUM#不开票:NO_INVOICING, 增值税普票:ORDINARY_INVOICE, 增值税专票:SPECIAL_INVOICE#
   */
  invoiceType?: InvoiceType;
  /**
   * 开票类型（中文）
   */
  invoiceTypeDesc?: string;
  /**
   * 补充说明付款条款内容,结算付款方式为【其他付款说明】时必传
   */
  paymentTermsContent?: string;
  /**
   * #合同签订后，设备进场前预付,结算付款方式为【4:按期付款】时必传#
   */
  prePayment?: number;
  /**
   * 对账日,,结算付款方式为【按期付款】时必传
   */
  reconciliationDay?: number;
  /**
   * #结算付款方式#ENUM#全额预付:FULL_PREPAY, 设备到场前付:TURN_UP_BEFORE_PAY, 每日现结:DAILY_PAY,
   * 用车完结付:PAY_IN_END, 按期付款:REPAY_ON_TIME, 其他付款说明:OTHER_PAY_DESCRIPTION#
   */
  settlementPaymentType?: SettlementPaymentType;
  /**
   * 结算付款方式（中文）
   */
  settlementPaymentTypeDesc?: string;
  /**
   * 账单盖章/签字后的天数,结算付款方式为【按期付款】时必传
   */
  signSealAfterDay?: number;
  /**
   * 账单盖章/签字天数内需要支付金额的百分比,结算付款方式为【按期付款】时必传
   */
  signSealAfterDayWithinPay?: number;
  /**
   * 补充说明其他特殊约定内容
   */
  specialAgreementContent?: string;
}

/**
 * #开票节点#ENUM#先付款后开票:FIRST_PAY_LAST_INVOICE, 先开票后付款:FIRST_INVOICE_LAST_PAY#
 */
export enum InvoiceNode {
  FirstInvoiceLastPay = 'FIRST_INVOICE_LAST_PAY',
  FirstPayLastInvoice = 'FIRST_PAY_LAST_INVOICE',
}

/**
 * #开票类型#ENUM#不开票:NO_INVOICING, 增值税普票:ORDINARY_INVOICE, 增值税专票:SPECIAL_INVOICE#
 */
export enum InvoiceType {
  NoInvoicing = 'NO_INVOICING',
  OrdinaryInvoice = 'ORDINARY_INVOICE',
  SpecialInvoice = 'SPECIAL_INVOICE',
}

/**
 * #结算付款方式#ENUM#全额预付:FULL_PREPAY, 设备到场前付:TURN_UP_BEFORE_PAY, 每日现结:DAILY_PAY,
 * 用车完结付:PAY_IN_END, 按期付款:REPAY_ON_TIME, 其他付款说明:OTHER_PAY_DESCRIPTION#
 */
export enum SettlementPaymentType {
  DailyPay = 'DAILY_PAY',
  FullPrepay = 'FULL_PREPAY',
  OtherPayDescription = 'OTHER_PAY_DESCRIPTION',
  PartPayment = 'PART_PAYMENT',
  PayInEnd = 'PAY_IN_END',
  RepayOnTime = 'REPAY_ON_TIME',
  TurnUpBeforePay = 'TURN_UP_BEFORE_PAY',
}

/**
 * 客户端订单签约状态
 */
export enum SignProgress {
  Signed = 'SIGNED',
  Signing = 'SIGNING',
  Unsign = 'UNSIGN',
}

/**
 *
 * #订单状态#ENUM#WAIT_START_SIGN::待发起签约WAIT_SIGN_ONLINE::待签约（线上）WAIT_SIGN_OFFLINE::待签约（线下）APPROVE_IN_OFFLINE::审批中（线下）APPROVE_NO_PASS_OFFLINE::审批不通过（线下）COMPLETED_SIGN_ONLINE::已签约（线上）COMPLETED_SIGN_OFFLINE::已签约（线下）CANCEL::已取消
 */
export enum StatusForPC {
  ApproveInOffline = 'APPROVE_IN_OFFLINE',
  ApproveNoPassOffline = 'APPROVE_NO_PASS_OFFLINE',
  Cancel = 'CANCEL',
  CompletedSignOffline = 'COMPLETED_SIGN_OFFLINE',
  CompletedSignOnline = 'COMPLETED_SIGN_ONLINE',
  WaitSignOffline = 'WAIT_SIGN_OFFLINE',
  WaitSignOnline = 'WAIT_SIGN_ONLINE',
  WaitStartSign = 'WAIT_START_SIGN',
}

/**
 * CustomerOrderValuationVO，客户订单计费约定信息
 */
export interface CustomerOrderValuationVO {
  /**
   * 干租-按月、按日-进场规则-中间进场-天数
   */
  dryEntryRuleMiddleDays?: number;
  /**
   * 干租-按月、按日-进场规则-时间-后, 格式:HH:mm
   */
  dryEntryRuleTimeAfter?: string;
  /**
   * 干租-按月、按日-进场规则-时间-后-天数
   */
  dryEntryRuleTimeAfterDays?: number;
  /**
   * 干租-按月、按日-进场规则-时间-前, 格式:HH:mm
   */
  dryEntryRuleTimeBefore?: string;
  /**
   * 干租-按月、按日-进场规则-时间-前-天数
   */
  dryEntryRuleTimeBeforeDays?: number;
  /**
   * 干租-按月、按日-退场规则-中间进场-天数
   */
  dryExitRuleMiddleDays?: number;
  /**
   * 干租-按月、按日-退场规则-时间-后, 格式:HH:mm
   */
  dryExitRuleTimeAfter?: string;
  /**
   * 干租-按月、按日-退场规则-时间-后-天数
   */
  dryExitRuleTimeAfterDays?: number;
  /**
   * 干租-按月、按日-退场规则-时间-前, 格式:HH:mm
   */
  dryExitRuleTimeBefore?: string;
  /**
   * 干租-按月、按日-退场规则-时间-前-天数
   */
  dryExitRuleTimeBeforeDays?: number;
  /**
   * #湿租-按月、台班-住宿伙食#ENUM#包食宿:CONTAIN_ALL, 包住宿，不包伙食:BED, 包伙食，不包住宿:FOOD, 不包食宿:NOT_CONTAIN#
   */
  machineTeamFoodBedType?: MachineTeamFoodBedType;
  /**
   * 湿租-按月、台班-住宿伙食（中文）
   */
  machineTeamFoodBedTypeDesc?: string;
  /**
   * 湿租-台班条款-台班小时数
   */
  machineTeamTime?: number;
  /**
   * 其他计费约定
   */
  otherValuationRemark?: string;
  /**
   * 湿租-台班条款-超时不足时间
   */
  timeoutInsufficient?: number;
  /**
   * 湿租-按月-进场规则-中间进场-天数
   */
  wetEntryRuleMiddleDays?: number;
  /**
   * 湿租-按月-进场规则-时间-后, 格式:HH:mm
   */
  wetEntryRuleTimeAfter?: string;
  /**
   * 湿租-按月-进场规则-时间-后-天数
   */
  wetEntryRuleTimeAfterDays?: number;
  /**
   * 湿租-按月-进场规则-时间-前, 格式:HH:mm
   */
  wetEntryRuleTimeBefore?: string;
  /**
   * 湿租-按月-进场规则-时间-前-天数
   */
  wetEntryRuleTimeBeforeDays?: number;
  /**
   * 湿租-按月-退场规则-中间进场-天数
   */
  wetExitRuleMiddleDays?: number;
  /**
   * 湿租-按月-退场规则-时间-后, 格式:HH:mm
   */
  wetExitRuleTimeAfter?: string;
  /**
   * 湿租-按月-退场规则-时间-后-天数
   */
  wetExitRuleTimeAfterDays?: number;
  /**
   * 湿租-按月-退场规则-时间-前, 格式:HH:mm
   */
  wetExitRuleTimeBefore?: string;
  /**
   * 湿租-按月-退场规则-时间-前-天数
   */
  wetExitRuleTimeBeforeDays?: number;
}

/**
 * #湿租-按月、台班-住宿伙食#ENUM#包食宿:CONTAIN_ALL, 包住宿，不包伙食:BED, 包伙食，不包住宿:FOOD, 不包食宿:NOT_CONTAIN#
 */
export enum MachineTeamFoodBedType {
  Bed = 'BED',
  ContainAll = 'CONTAIN_ALL',
  Food = 'FOOD',
  NotContain = 'NOT_CONTAIN',
}

/**
 * EnterpriseItemsVO-返回
 */
export interface EnterpriseItemsVO {
  /**
   * #社会统一信用代码#
   */
  creditNo?: string;
  /**
   * #企业编号#
   */
  id?: string;
  /**
   * #匹配关键字#
   */
  matchItems?: string;
  /**
   * #匹配类型#
   */
  matchType?: string;
  /**
   * #企业名称#
   */
  name?: string;
  /**
   * #企业法定代表人#
   */
  operName?: string;
  /**
   * #注册号#
   */
  regNo?: string;
  /**
   * #成立日期#
   */
  startDate?: string;
  /**
   * #企业类型，枚举值：0 企业，4社团，5律所，6香港公司#
   */
  type?: string;
}

export interface AssociatedEnterpriseDTO {
  /**
   * 当前登录客户id
   */
  customerId: string;
  /**
   * 企业名称
   */
  enterpriseName: string;
  /**
   * 法人
   */
  legalPerson: string;
  /**
   * 统一社会信用代码
   */
  unifiedSocialCreditCode: string;
}

/**
 * FileUploadResultVO
 */
export interface FileUploadResultVO {
  appCode?: string;
  bucketName?: string;
  contentType?: string;
  createDate?: Date;
  createUserId?: string;
  disabled?: number;
  fileName?: string;
  fileObjectKey?: string;
  filePath?: string;
  fileSize?: number;
  fileType?: string;
  id: string;
  updateDate?: Date;
  url: string;
}

export enum EnterAuthType {
  remit = 1, // 打款认证,
  authLetter,
}

export enum RemitAuditStatus {
  none,
  verifying = 2,
  pass,
}

/**
 * 客户主体VO
 */
export interface CustomerInfoVo {
  //  真实的认证状态（与当前有无流程无关）1-未认证，2-已认证，3-认证过期
  realAuthStatus: Number;
  // 客户企业身份认证类型： 0 未知； 1-打款认证；2-授权书认证；3-反向打款认证；4-企业法人刷脸认证
  authType: EnterAuthType;

  // 0-未认证；2-认证中；3-认证通过
  remitAuditStatus: RemitAuditStatus;
  /**
   * 企业授权书审核状态，NONE：无授权书，AUDITING：认证审核中，AUDIT_PASS：认证审核通过，AUDIT_NOT_PASS：认证审核不通过
   */
  authorizationLetterAuditStatus?: AuthorizationLetterAuditStatus;
  /**
   * 企业授权书审核状态（中文）
   */
  authorizationLetterAuditStatusDesc?: string;
  /**
   * 客户编码
   */
  code?: string;
  /**
   * 合同签署人身份证号
   */
  contractSignerIdNumber?: string;
  /**
   * 合同签署人姓名
   */
  contractSignerName?: string;
  /**
   * 合同签署人电话
   */
  contractSignerPhone?: string;
  /**
   * 所属企业id
   */
  enterpriseId?: string;
  /**
   * 所属企业名称
   */
  enterpriseName?: string;
  /**
   * 企业实名状态: UN_VERIFIED:未认证, VERIFIED:已认证
   */
  enterpriseRealNameAuth?: RealNameAuth;
  /**
   * 企业实名状态（中文）
   */
  enterpriseRealNameAuthEnumDesc?: string;
  /**
   * 客户id
   */
  id: string;

  merchantCustomerIds?: string[];
  /**
   * 客户性质，ENTERPRISE:企业, PERSONAL:个人
   */
  nature?: PartyNature;
  /**
   * 客户性质（中文）
   */
  natureDesc?: string;
  /**
   * 签署人实名状态：UN_VERIFIED:未认证, VERIFIED:已认证
   */
  signerRealNameAuth?: RealNameAuth;
  /**
   * 签署人实名状态（中文）
   */
  signerRealNameAuthEnumDesc?: string;

  currLogin: boolean;
  authDesc: string;
  signerAuthDesc: string;
  authReport: number;
  isPersonal?: boolean;
  isPersonalVerify?: boolean;
  isEnterVerify?: boolean;
  isEnterVerifying?: boolean;
  isEnterAuditing?: boolean;
  isVerify?: boolean;
  authExpireTimeStr?: string;

  personLinkEnterNum?: number;
}

/**
 * 企业授权书审核状态，NONE：无授权书，AUDITING：认证审核中，AUDIT_PASS：认证审核通过，AUDIT_NOT_PASS：认证审核不通过
 */
export enum AuthorizationLetterAuditStatus {
  AuditNotPass = 'AUDIT_NOT_PASS',
  AuditPass = 'AUDIT_PASS',
  Auditing = 'AUDITING',
  None = 'NONE',
}

export interface CustomerFileDTO {
  customerId: string;
  extension?: string;
  fileId: string;
  fileName?: string;
  fileUrl: string;
  type: 'AUTHORIZATION_LETTER';
}

export type AppFrom = 'share' | 'self' | 'push';

export interface LoginBySmsDTO {
  /**
   * 验证码
   */
  captcha: string;
  /**
   * 渠道类型#OPERATION_ADMIN:运营后台端, MERCHANT_WEB:商家web端,ROBOT_APPLETS:机手小程序, MERCHANT_APP:
   * 商户APP端, CRM_APP: CRM-APP端,CHANNEL_APPLETS：渠道小程序,CUSTOMER_APP: 客户APP端CUSTOMER_APPLETS:
   * 客户小程序端STORE_FRONT_DESK_APP: 门店APP端NEW_CUSTOMER_APPLETS: 新客端小程序
   */
  channelType: 'JXXQ_DRIVER_APPLETS';
  /**
   * 用户身份#CUSTOMER:客户#TENANT:商户#OPERATOR:机手
   */
  identity: 'LOGISTICS_PROVIDER';
  /**
   * 手机号
   */
  phone: string;
}

/**
 * SignFileVO
 */
export interface SignFileVO {
  /**
   * 文件
   */
  files?: FileTwinsVO[];
  /**
   * 签约日期
   */
  signDate?: string;
  /**
   * 文件类型，0:未知,
   * 1:订单,
   * 2:合同
   */
  type?: SignFileType;

  title?: string;
}

/**
 * FileTwinsVO
 */
export interface FileTwinsVO {
  download?: FileDTO;
  preview?: FileDTO;
}

/**
 * 文件类型，0:未知,
 * 1:订单,
 * 2:合同
 */
export enum SignFileType {
  Contract = 'CONTRACT',
  Contract2 = 'STAGE_PERSONAL_CONTRACT',
  None = 'NONE',
  Order = 'ORDER',
  Order2 = 'STAGE_PERSONAL_ORDER',
}

export interface BannerVO {
  bannerUrl: string;
  linkType?: string;
  linkUrl?: string;
}

/**
 * RemoteProjectDeviceCardVO
 */
export interface RemoteProjectDeviceCardVO {
  /**
   * 进场通知单纬度
   */
  enterNotice?: RemoteEnterNoticeVO[];
  /**
   * #工程id#
   */
  projectId: string;
  /**
   * #工程名称#
   */
  projectName?: string;
}

/**
 * RemoteEnterNoticeVO
 */
export interface RemoteEnterNoticeVO {
  /**
   * 进场通知单Id
   */
  noticeId: string;
  /**
   * 运输工单信息
   */
  trans: RemoteDeviceCardVO[];
}

/**
 * RemoteDeviceCardVO
 */
export interface RemoteDeviceCardVO {
  canEnterConfirm?: boolean; // 是否可以发起进场确认
  /**
   * 单据ID
   */
  billId: string;
  /**
   * #单据类型#ENUM#ENTER_NOTICE:进场通知单,EXIT_NOTICE:退场通知单#
   */
  billType?: Type;
  /**
   * #取消时间#
   */
  canceledTime?: Date;
  /**
   * #完成时间#
   */
  completedTime?: Date;
  /**
   * #创建时间#
   */
  createTime?: Date;
  /**
   * #创建人#
   */
  creator?: string;
  /**
   * #创建人id#
   */
  creatorUserId?: number;
  /**
   * #司机ID#
   */
  driverId: string;
  /**
   * #司机姓名#
   */
  driverName?: string;
  /**
   * #司机联系方式#
   */
  driverPhone?: string;
  /**
   * 承运单ID
   */
  expressOrderId?: number;
  /**
   * 发车时间
   */
  launchTime?: Date;
  /**
   * #车牌号#
   */
  licensePlate?: string;
  loadingAddress?: RemoteOrderAddressVO;
  /**
   * 装车地打卡时间
   */
  loadingClockTime?: Date;
  /**
   * #装车时间#
   */
  loadingTime?: Date;
  /**
   * 工单设备
   */
  orderDeviceStatistics?: RemoteOrderDeviceStatisticVO[];
  /**
   * #订单id#
   */
  orderId?: number;
  /**
   * 进度节点信息
   */
  progressNodes?: RemoteOrderProgressNodeVO[];
  /**
   * #工程id#
   */
  projectId?: number;
  /**
   * #工程名称#
   */
  projectName?: string;
  /**
   * 运输工单编码
   */
  transportWorkOrderCode?: string;
  /**
   * 运输工单ID
   */
  transportWorkOrderId?: number;
  /**
   * #运输工单状态#
   */
  transportWorkOrderStatus?: TransportWorkOrderStatus;
  unloadingAddress?: RemoteOrderAddressVO;
  /**
   * 卸车地打卡时间
   */
  unLoadingClockTime?: Date;
  /**
   * #卸车时间#
   */
  unloadingTime?: Date;
  /**
   * #上传图片信息#
   */
  uploads?: string[];
  /**
   * #车辆ID#
   */
  vehicleId?: number;
  /**
   * #车辆类型#
   */
  vehicleType?: string;
  /**
   * #车辆类型ID#
   */
  vehicleTypeId?: number;
  /**
   * 验收时间
   */
  verifyTime?: Date;
  /**
   * 验收人用户id
   */
  verifyUserId?: number;
  /**
   * 验收人用户名称
   */
  verifyUserName?: string;
}

/**
 * #单据类型#ENUM#ENTER_NOTICE:进场通知单,EXIT_NOTICE:退场通知单#
 *
 * #业务类型#ENUM#1:进场通知,2:退场通知#
 */
export enum Type {
  EnterNotice = 'ENTER_NOTICE',
  ExitNotice = 'EXIT_NOTICE',
}

/**
 * RemoteOrderAddressVO
 */
export interface RemoteOrderAddressVO {
  /**
   * 详细地址
   */
  address?: string;
  /**
   * #地址标题#
   */
  addressTitle?: string;
  /**
   * #地址类型#ENUM#1:寄件人,2:收件人#
   */
  addrType?: AddrType;
  /**
   * #城市#
   */
  cityCode?: string;
  /**
   * #城市名称#
   */
  cityName?: string;
  /**
   * #区域#
   */
  districtCode?: string;
  /**
   * #区域名称#
   */
  districtName?: string;
  /**
   * 纬度
   */
  lat?: number;
  /**
   * 经度
   */
  lng?: number;
  /**
   * #联系方式#
   */
  phone?: string;
  /**
   * #省份#
   */
  provinceCode?: string;
  /**
   * #省份名称#
   */
  provinceName?: string;
  /**
   * #用户id#
   */
  userId?: number;
  /**
   * #姓名#
   */
  userName?: string;
}

/**
 * #地址类型#ENUM#1:寄件人,2:收件人#
 */
export enum AddrType {
  Receiver = 'RECEIVER',
  Sender = 'SENDER',
}

/**
 * RemoteOrderDeviceStatisticVO
 */
export interface RemoteOrderDeviceStatisticVO {
  /**
   * 设备标准产品ID
   */
  deviceCustomerSellitemId?: number;
  /**
   * 设备标准产品名称
   */
  deviceCustomerSellitemName?: string;
  /**
   * 设备所属二级品类的主图
   */
  deviceImgUrl?: string;
  /**
   * 约定台量
   */
  num?: number;
  /**
   * 设备明细
   */
  orderDevices?: RemoteOrderDeviceVO[];
}

/**
 * RemoteOrderDeviceVO
 */
export interface RemoteOrderDeviceVO {
  /**
   * 设备标准产品ID
   */
  deviceCustomerSellitemId?: number;
  /**
   * 设备编号
   */
  deviceInstanceCode?: string;
  /**
   * 设备实例ID
   */
  deviceInstanceId?: number;
  /**
   * 设备标准产品名称
   */
  deviceName?: string;
  /**
   * #设备实例状态#WAITING_DEPART:待发车,DEPARTED:已发车,DELIVERED:已送达,VERIFIED:已验机#
   */
  deviceStatus?: DeviceStatus;
  /**
   * 验机时间
   */
  verifyTime?: Date;
  /**
   * 验机人用户id
   */
  verifyUserId?: number;
  /**
   * 验机人用户名称
   */
  verifyUserName?: string;
}

/**
 * #设备实例状态#WAITING_DEPART:待发车,DEPARTED:已发车,DELIVERED:已送达,VERIFIED:已验机#
 */
export enum DeviceStatus {
  Delivered = 'DELIVERED',
  Departed = 'DEPARTED',
  Verified = 'VERIFIED',
  WaitingDepart = 'WAITING_DEPART',
}

/**
 * RemoteOrderProgressNodeVO
 */
export interface RemoteOrderProgressNodeVO {
  /**
   * #业务类型#ENUM#1:进场通知,2:退场通知#
   */
  bizType?: Type;
  /**
   * #节点编码#
   */
  code?: string;
  /**
   * #创建人#
   */
  creator?: string;
  /**
   * #创建人id#
   */
  creatorId?: number;
  /**
   * #单据ID#
   */
  orderId?: number;
  /**
   * #单据进度节点id#
   */
  orderProgressNodeId?: number;
  /**
   * #节点类型，1：承运单进度节点，2：运输工单进度节点#
   */
  orderType?: OrderType;
  /**
   * #进度节点事件#
   */
  progressNodeEvent?: string;
  /**
   * #运输进度节点ID#
   */
  progressNodeId?: number;
  /**
   * #运输进度节点时间#
   */
  progressNodeTime?: Date;
  /**
   * #节点说明#
   */
  remark?: string;
  /**
   * #排序序号#
   */
  sort?: number;
  /**
   * #节点标题#
   */
  title?: string;
}

/**
 * #节点类型，1：承运单进度节点，2：运输工单进度节点#
 */
export enum OrderType {
  ExpressOrder = 'EXPRESS_ORDER',
  TransportWorkOrder = 'TRANSPORT_WORK_ORDER',
}

/**
 * #运输工单状态#
 */
export enum TransportWorkOrderStatus {
  Cancel = 'CANCEL',
  Completed = 'COMPLETED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
}

/**
 * LocationVO
 */
export interface LocationVO {
  /**
   * #定位精度#
   */
  accuracy?: number;
  /**
   * #海拔高度 单位:米#
   */
  altitude?: number;
  /**
   * #方向 取值范围[0~360]0代表正北方,顺时针方向取值#
   */
  bearing?: number;
  /**
   * #距离#
   */
  distance?: number;
  /**
   * #纬度#
   */
  lat?: number;
  /**
   * #经度#
   */
  lng?: number;
  /**
   * #定位时间#
   */
  locateTime?: Date;
  /**
   * #定位类型#
   */
  locateType?: string;
  /**
   * #速度 单位:km/h#
   */
  speed?: number;
  /**
   * #终端id#
   */
  terminalId?: string;
  /**
   * #终端类型 PEOPLE:人, CAR:车, DEVICE:设备#
   */
  terminalType?: TerminalType;
}

/**
 * #终端类型 PEOPLE:人, CAR:车, DEVICE:设备#
 */
export enum TerminalType {
  Car = 'CAR',
  Device = 'DEVICE',
  People = 'PEOPLE',
}
export interface BillPayDetailVO {
  billType: 1 | 2 | 3; // 1账单，2订单, 3 工程
  contractSigner: string;
  lessorSubject: string;
  orderCode: string;
  payAmount: string;
  tenantrySubject: string;
  projectName?: string;
  confirmTime?: string;
  billStartDate?: string;
  billEndDate?: string;
}

/**
 * RemoteMyDeviceCardVO
 */
export interface RemoteMyDeviceCardVO {
  /**
   * #电池电量#
   */
  batteryLevel?: number;
  /**
   * 设备编号
   */
  deviceNo?: string;
  /**
   * 设备实例id
   */
  id: string;
  /**
   * #数据最后更新时间#
   */
  lastUpdateTime?: Date;
  /**
   * #纬度#
   */
  lat?: string;
  /**
   * #经度#
   */
  lng?: string;
  /**
   * #定位时间#
   */
  locateTime?: Date;
  /**
   * 设备名称
   */
  name?: string;
  /**
   * 工程名称
   */
  projectName?: string;
  /**
   * 自编号
   */
  selfNo?: string;
  /**
   * 是否展示电量 ，为true则展示
   */
  showElec?: boolean;
  /**
   * 设备实例状态(0:,1:已开机,2:已关机)
   */
  status?: DeviceServiceStatus;
  /**
   * 设备实例状态展示
   */
  statusDesc?: string;
  /**
   * 总工作时间h
   */
  totalWorktime?: string;
  /**
   * 今日工作时长
   */
  workingHours?: string;
}

/**
 * 设备实例状态(0:,1:已开机,2:已关机)
 */
export enum DeviceServiceStatus {
  None = 'NONE',
  Offline = 'OFFLINE',
  Online = 'ONLINE',
}

/**
 * RemoteMyDeviceDetailCardVO
 */
export interface RemoteMyDeviceDetailCardVO {
  /**
   * #电池电量#
   */
  batteryLevel?: number;
  /**
   * #设备实例id#
   */
  deviceInstanceId?: number;
  /**
   * 设备型号
   */
  deviceModel?: string;
  /**
   * 设备编号
   */
  deviceNo?: string;
  /**
   * 进场通知单id
   */
  enterId?: number;
  /**
   * 进场通知单编号
   */
  enterNo?: string;
  /**
   * 进场时间
   */
  enterTime?: Date;
  /**
   * 退场通知单id
   */
  exitId?: number;
  /**
   * 退场通知单编号
   */
  exitNo?: string;
  /**
   * 退场时间
   */
  exitTime?: Date;
  /**
   * #数据最后更新时间#
   */
  lastUpdateTime?: Date;
  /**
   * #纬度#
   */
  lat?: string;
  /**
   * #经度#
   */
  lng?: string;
  /**
   * #定位时间#
   */
  locateTime?: Date;
  /**
   * 锁定状态;1:已锁定,
   * 2:未锁定,
   */
  lockStatus?: LockStatus;
  /**
   * 设备名称
   */
  name?: string;
  /**
   * 订单id
   */
  orderId?: number;
  /**
   * 订单编号
   */
  orderNo?: string;
  /**
   * #定位POI名称#
   */
  poiName?: string;
  /**
   * 租用状态;1:待进场,
   * 2:在租中,
   * 3:已退场,
   * 4:报停中
   */
  rentStatus?: RentStatus;
  /**
   * 自编号
   */
  selfNo?: string;
  /**
   * 设备实例状态(0:,1:已开机,2:已关机)
   */
  status?: DeviceServiceStatus;
  /**
   * 总工作时间h
   */
  totalWorktime?: string;
  /**
   * 今日工作时长
   */
  workingHours?: string;
  /**
   * 本周工作时长
   */
  workingHoursOfWeek?: string;
}

/**
 * 锁定状态;1:已锁定,
 * 2:未锁定,
 */
export enum LockStatus {
  Lock = 'LOCK',
  None = 'NONE',
  Unlock = 'UNLOCK',
}

/**
 * 租用状态;1:待进场,
 * 2:在租中,
 * 3:已退场,
 * 4:报停中
 */
export enum RentStatus {
  Exited = 'EXITED',
  HangUping = 'HANG_UPING',
  None = 'NONE',
  Renting = 'RENTING',
  WaitIn = 'WAIT_IN',
}

export interface CustomerReq {
  customerId: string;
}

/*
 * CustomerOrderPageVO，客户app分页
 */
export interface CustomerOrderPageVO {
  /**
   * #商机id#
   */
  businessId?: number;
  /**
   * 订单编号
   */
  code?: string;
  /**
   * 设备类型数量
   */
  deviceCategoryList?: CustomerDeviceCategoryNumVO[];
  /**
   * 设备类型数量
   */
  deviceEnterList?: CustomerDeviceCategoryNumVO[];
  /**
   * 设备类型数量
   */
  deviceServiceList?: CustomerDeviceCategoryNumVO[];
  /**
   * 进场日期
   */
  entryDate?: Date;
  /**
   * 截止日期
   */
  expDate?: Date;
  /**
   * 订单预期结束日期
   */
  expectEndDate?: Date;
  /**
   * 租赁到期提醒
   */
  expReminder?: boolean;
  /**
   * 是否已签约
   */
  haveSign?: boolean;
  /**
   * 订单id
   */
  id?: number;
  /**
   * 出租方
   */
  lessor?: string;
  /**
   * 预付枚举,1:未预付,
   * 2:已足额预付,
   * 3:已预付未足额,
   * 4:已预付,
   */
  prepayStatus?: PrepayStatus;
  /**
   * 预付枚举(中文)
   */
  prepayStatusDesc?: string;
  /**
   * 工程名称
   */
  projectName?: string;
  /**
   * #签约日期#
   */
  signDate?: Date;
  /**
   * 签约方式，ONLINE_SIGN：线上签约，OFFLINE_SIGN：线下签约
   */
  signMethod?: SignMethod;
  /**
   * 签约方式（中文）
   */
  signMethodDesc?: string;
  /**
   *
   * #订单状态#ENUM#WAIT_START_SIGN:待发起签约,WAIT_SIGN:待签约,APPROVE_IN:审批中,APPROVE_NO_PASS:审批不通过,COMPLETED_SIGN:已签约,CANCEL:已取消#
   */
  status?: OrderStatus;
  /**
   * 状态（中文）
   */
  statusDesc?: string;
  /**
   * 承租方
   */
  tenantry?: string;
}

/**
 * CustomerDeviceCategoryNumVO，设备数量
 */
export interface CustomerDeviceCategoryNumVO {
  /**
   * 设备类型
   */
  deviceCategory?: string;
  /**
   * 数量
   */
  num?: number;
}

/**
 * 预付枚举,1:未预付,
 * 2:已足额预付,
 * 3:已预付未足额,
 * 4:已预付,
 */
export enum PrepayStatus {
  Approve = 'APPROVE',
  FullAmount = 'FULL_AMOUNT',
  NotFullAmount = 'NOT_FULL_AMOUNT',
  NotPaid = 'NOT_PAID',
}

export interface DeviceListDTO {
  lat: string;
  lng: string;
  cityCode: string;
  storeId: string;
  deviceCate: string;
}

/**
 * DeviceVO
 */
export interface DeviceVO {
  /**
   * 设备日组价
   */
  dayPrice?: number;
  /**
   * 设备品牌
   */
  deviceBrand?: string;
  /**
   * 设备id
   */
  deviceId?: number;
  deviceImg?: FileDTO;
  /**
   * 设备名称
   */
  deviceName?: string;
  /**
   * 设备月组价
   */
  monthPrice?: number;
}

/**
 * DeviceDetailVO
 */
export interface DeviceDetailVO {
  /**
   * 设备日组价
   */
  dayPrice?: number;
  /**
   * 设备详情图
   */
  detailImgs?: FileDTO[];
  /**
   * 设备品牌
   */
  deviceBrand?: string;
  /**
   * 设备id
   */
  deviceId?: number;
  deviceImg?: FileDTO;
  /**
   * 设备名称
   */
  deviceName?: string;
  /**
   * 设备参数
   */
  deviceParam?: {
    brand: string;
    params: { key: string; value: string }[];
  }[];
  marketingImg?: FileDTO;
  /**
   * 设备月组价
   */
  monthPrice?: number;
  /**
   * 设备承诺
   */
  promises?: string[];
}

export interface PoiVO {
  address?: string;
  businessarea?: string;
  direction?: string;
  distance?: string;
  id?: string;
  location?: string;
  name?: string;
  poiweight?: string;
  tel?: string;
  type?: string;
}

/**
 * 地图地址-对象
 */
export interface AddrVO {
  /**
   * #地址#
   */
  address: string;
  /**
   * #地址标题#
   */
  addressTitle: string;
  addressType?: AddressType;
  /**
   * #纬度#
   */
  lat: string;
  /**
   * #经度#
   */
  lng: string;
}

export enum AddressType {
  Bank = 'BANK',
  Correspondence = 'CORRESPONDENCE',
  LoadCar = 'LOAD_CAR',
  Project = 'PROJECT',
  UnloadCar = 'UNLOAD_CAR',
  UseCar = 'USE_CAR',
}

export interface AdviceDTO {
  phone: string;
  devices?: string[];
  usingAdress: string;
}

export interface RemitAuthDTO extends ESignBankItem {
  bankAccount: String;
  customerId: String;
  enterpriseId: String;
  enterpriseName: String;
}
export interface RemitValidDTO {
  customerId: String;
  enterpriseId: String;
  randomAmount: String;
}

export interface RemoteSimpleStoreVO {
  storeId: string;
  storeName: string;
}

/**
 * RemoteStoreInfoWithDistanceVO，门店信息(包含距离信息)
 */
export interface RemoteStoreInfoWithDistanceVO {
  /**
   * #地址#
   */
  address?: string;
  /**
   * #补充地址说明#废弃字段
   */
  addressDesc?: string;
  /**
   * #地点-标题#
   */
  addressTitle?: string;
  /**
   * #业务组#
   */
  bizGroup?: BizGroup;
  /**
   * #业务类型#
   */
  bizType?: BizType;
  /**
   * #城市编号#
   */
  cityCode?: string;
  /**
   * #城市名称#
   */
  cityName?: string;
  contactImage?: FileDTO;
  /**
   * 联系人/负责人
   */
  contacts?: string;
  /**
   * 联系人/负责人号码
   */
  contactsPhone?: string;
  /**
   * #距离（单位：米）#
   */
  distance?: number;
  /**
   * #区域编号#
   */
  districtCode?: string;
  /**
   * #区域名称#
   */
  districtName?: string;
  /**
   * #门店id#
   */
  id: string;
  /**
   * 门店介绍
   */
  introduction?: string;
  /**
   * #是否是最近的门店#true：是，false：不是
   */
  isNearest?: boolean;
  /**
   * #地点-纬度#
   */
  lat?: string;
  /**
   * #地点-经度#
   */
  lng?: string;
  /**
   * #商户id#
   */
  merchantId?: number;
  /**
   * #商户名称#
   */
  merchantName?: string;
  /**
   * #门店联系方式#
   */
  phone?: string;
  /**
   * #省份编号#
   */
  provinceCode?: string;
  /**
   * #省份名称#
   */
  provinceName?: string;
  /**
   * #服务承诺#
   */
  servicePromiseList?: string[];
  /**
   * #服务范围#
   */
  serviceScope?: string;
  /**
   * #门店图片#
   */
  storeImages?: FileDTO[];
  /**
   * #门店名称#
   */
  storeName?: string;
  /**
   * #门店类型#
   */
  storeType?: StoreType;
}

/**
 * #业务组#
 */
export enum BizGroup {
  Innovation = 'INNOVATION',
  Rentals = 'RENTALS',
}

/**
 * #业务类型#
 */
export enum BizType {
  CheapSupply = 'CHEAP_SUPPLY',
  Franchising = 'FRANCHISING',
}

/**
 * #门店类型#
 */
export enum StoreType {
  Logisticians = 'LOGISTICIANS',
  SupplyPartner = 'SUPPLY_PARTNER',
}

export interface AdContent {
  // 定义前端点击是弹窗还是跳转到落地页等，modal (弹窗)和 page(落地页）native（原生页面）login（登录）
  direct_type: 'modal' | 'page' | 'native' | 'login';
  // 跳转的uri
  direct_uri: string;
  // 素材图片
  image: string;
}
export interface CustomerAuthInfoVO {
  bankAccount: string;
  bankName: string;
  enterpriseName: string;
}

export interface ESignBankItem {
  bank: string;
  bankName: string;
  city: string;
  cnapsCode: string;
  province: string;
}
