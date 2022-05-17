import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface HXRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HXRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HXRequestInterceptors<T>
  showLoading?: boolean
}
