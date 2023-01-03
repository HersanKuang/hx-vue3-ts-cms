import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface HXRequestInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (error: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (error: any) => any
}

export interface HXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HXRequestInterceptors<T>
  showLoading?: boolean
}
