// 根据process.env.NODE_EVN区分
// 开发环境：development
// 生产环境：production
// 测试环境：test

let BASE_URL = ""
const TIME_OUT = 10000

if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api"
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "/api"
} else {
  BASE_URL = "http://httpbin.org/"
}

export { BASE_URL, TIME_OUT }
