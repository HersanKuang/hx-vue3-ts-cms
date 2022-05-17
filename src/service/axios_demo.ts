import axios from "axios"

// axios的实例对象
// 1.模拟get请求
axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
  console.log(res)
})

// // 2.get请求，并且传入参数
// axios
//   .get("http://httpbin.org/get", {
//     params: {
//       name: "abc",
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// // 3.post请求
// axios
//   .post("http://httpbin.org/post", {
//     data: {
//       name: "abcd",
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// 4.axios的配置选项
// 4.1全局的配置
axios.defaults.baseURL = "http://httpbin.org"
axios.defaults.timeout = 10000
// axios.defaults.headers = {}

// 4.2每个请求的单独配置
axios
  .get("/get", {
    params: {
      name: "abc",
      age: 18
    },
    timeout: 5000,
    headers: {}
  })
  .then((res) => {
    console.log(res)
  })

axios
  .post("/post", {
    data: {
      name: "abcd",
      age: 18
    }
  })
  .then((res) => {
    console.log(res)
  })

// 5.axios.all -> 多个请求，一起返回
axios
  .all([
    axios.get("/get", { params: { name: "abc", age: 18 } }),
    axios.post("/post", { data: { name: "abc", age: 18 } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })

// 6.axios的拦截器
// fn1: 请求发送成功会执行的函数
// fn2：请求发送失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    // 想做的一些操作
    // 1.给请求添加token
    // 2.isLoading动画
    console.log("请求成功的拦截")
    return config
  },
  (err) => {
    console.log("请求发送错误")
    return err
  }
)

// fn1：数据相应成功(服务器正常的返回了数据 20x)
axios.interceptors.response.use(
  (res) => {
    console.log("相应成功的拦截")
    return res.data
  },
  (err) => {
    console.log("服务器响应失败")
    return err
  }
)

// axios.get()
// axios.request({
//   method: "GET"
// })
// axios.post()
// axios.delete()

// 额外补充的Promise中类型的使用
// Promise本身是可以有类型的
// new Promise<string>((resolve) => {
//   resolve("123")
// }).then((res) => {
//   console.log(res)
// })
