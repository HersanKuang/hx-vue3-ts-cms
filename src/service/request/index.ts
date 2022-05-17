import axios from "axios"
import type { AxiosInstance } from "axios"
import type { HXRequestInterceptors, HXRequestConfig } from "./type"

import { ElLoading } from "element-plus"
import { LoadingInstance } from "element-plus/es/components/loading/src/loading"

const DEFAULT_LOADING = true

class HXRequest {
  instance: AxiosInstance
  interceptors?: HXRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: HXRequestConfig) {
    // axios的create方法可以创建多个实例并且保存到instance中
    this.instance = axios.create(config)

    // 保存基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 2.添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据....",
            background: "rgba(0, 0, 0, 0.5)"
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 将loading移除
        this.loading?.close()

        const data = res.data
        // if (data.returnCode === "-1001") {
        //   console.log("请求失败!,错误信息")
        // } else {
        //   return data
        // }
        return data
      },
      (err) => {
        // 例子:判断不同的HttpErrorCode显示不同的错误信息
        if (err.response === 404) {
          console.log("404的错误~")
        }
        return err
      }
    )
  }

  request<T = any>(config: HXRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // console.log(res)

          // 2.将showLoading设置为初始值true,这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING

          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: HXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T = any>(config: HXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }
  delete<T = any>(config: HXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T = any>(config: HXRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export default HXRequest
