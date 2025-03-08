declare namespace API {
  type BaseResponseBoolean_ = {
    code?: number
    data?: boolean
    message?: string
  }

  type BaseResponseListChatmessage_ = {
    code?: number
    data?: Chatmessage[]
    message?: string
  }

  type BaseResponseListForbiddata_ = {
    code?: number
    data?: Forbiddata[]
    message?: string
  }

  type BaseResponseLoginUserVO_ = {
    code?: number
    data?: LoginUserVO
    message?: string
  }

  type BaseResponseLong_ = {
    code?: number
    data?: number
    message?: string
  }

  type BaseResponsePageUser_ = {
    code?: number
    data?: PageUser_
    message?: string
  }

  type BaseResponsePageUserVO_ = {
    code?: number
    data?: PageUserVO_
    message?: string
  }

  type BaseResponseString_ = {
    code?: number
    data?: string
    message?: string
  }

  type BaseResponseUser_ = {
    code?: number
    data?: User
    message?: string
  }

  type Chatmessage = {
    createTime?: string
    fromMessage?: string
    fromUserId?: number
    id?: number
    isDelete?: number
    toMessage?: string
    updateTime?: string
  }

  type checkUsingGETParams = {
    /** echostr */
    echostr?: string
    /** nonce */
    nonce?: string
    /** signature */
    signature?: string
    /** timestamp */
    timestamp?: string
  }

  type DeleteRequest = {
    id?: number
  }

  type Forbiddata = {
    createTime?: string
    forbidWord?: string
    id?: number
    isDelete?: number
    updateTime?: string
  }

  type ForbidWordAddRequest = {
    forbidWord?: string
  }

  type ForbidWordRemoveRequest = {
    id?: number
  }

  type ForbidWordSelectRequest = {
    forbidWord?: string
    id?: number
  }

  type ForbidWordUpdateRequest = {
    forbidWord?: string
    id?: number
  }

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number
  }

  type LoginUserVO = {
    createTime?: string
    id?: number
    updateTime?: string
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type OrderItem = {
    asc?: boolean
    column?: string
  }

  type PageUser_ = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: User[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type PageUserVO_ = {
    countId?: string
    current?: number
    maxLimit?: number
    optimizeCountSql?: boolean
    orders?: OrderItem[]
    pages?: number
    records?: UserVO[]
    searchCount?: boolean
    size?: number
    total?: number
  }

  type upgradeRoleUsingGETParams = {
    /** role */
    role: string
    /** userId */
    userId: string
  }

  type uploadFileUsingPOSTParams = {
    biz?: string
  }

  type User = {
    createTime?: string
    id?: number
    isDelete?: number
    mpOpenId?: string
    unionId?: string
    updateTime?: string
    userAccount?: string
    userAvatar?: string
    userName?: string
    userPassword?: string
    userProfile?: string
    userRole?: string
  }

  type UserAddRequest = {
    userAccount?: string
    userAvatar?: string
    userName?: string
    userRole?: string
  }

  type UserAdminAddRequest = {
    userAccount?: string
    userName?: string
    userPassword?: string
    userRole?: string
  }

  type userLoginByWxMiniUsingGETParams = {
    /** code */
    code: string
  }

  type userLoginByWxOpenUsingGETParams = {
    /** code */
    code: string
  }

  type UserLoginRequest = {
    userAccount?: string
    userPassword?: string
  }

  type UserQueryRequest = {
    current?: number
    id?: number
    mpOpenId?: string
    pageSize?: number
    sortField?: string
    sortOrder?: string
    unionId?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserRegisterRequest = {
    checkPassword?: string
    userAccount?: string
    userPassword?: string
  }

  type UserUpdateMyRequest = {
    userAvatar?: string
    userName?: string
    userProfile?: string
  }

  type UserUpdateRequest = {
    id?: number
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }

  type UserVO = {
    createTime?: string
    id?: number
    userAvatar?: string
    userName?: string
    userProfile?: string
    userRole?: string
  }
}
