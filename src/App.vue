<script lang="ts" setup>
import { ElConfigProvider } from "element-plus"
import zhCn from "element-plus/lib/locale/lang/zh-cn"
</script>

<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <router-view />
    </el-config-provider>
  </div>
</template>

<style lang="less">
.app {
  width: 100%;
  height: 100%;
}
</style>
