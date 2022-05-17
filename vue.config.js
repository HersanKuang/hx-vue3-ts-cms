const { defineConfig } = require("@vue/cli-service")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")

module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: "./",
  // 设置代理，解决跨域访问
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:5000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components"
      }
    },
    plugins: [
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
