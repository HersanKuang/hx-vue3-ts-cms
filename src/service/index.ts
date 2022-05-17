// serveice统一出口
import HXRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"
import localCache from "@/utils/cache"

const hxRequest = new HXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localCache.getCache("token")
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hxRequest
