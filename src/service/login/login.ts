import hxRequest from "../index"
import { IAccount, ILoginResult, UserInfo } from "./types"
import { IDataType } from "../types"

enum LoginAPI {
  AccountLogin = "/login",
  loginUserInfo = "/users/", // 用法：/users/1
  UserMenus = "/role/" // 用法：/role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hxRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requsetUserInfoById(id: number) {
  return hxRequest.get<IDataType<UserInfo>>({
    url: LoginAPI.loginUserInfo + id,
    // 加载动画
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hxRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading: false
  })
}
