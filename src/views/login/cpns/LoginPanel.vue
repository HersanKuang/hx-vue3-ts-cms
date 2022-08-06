<script lang="ts" setup>
import { ref } from "vue"
import LoginAccount from "./LoginAccount.vue"
import LoginPhone from "./LoginPhone.vue"
import { UserFilled, Iphone } from "@element-plus/icons-vue"

const isKeepPassword = ref(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const currentTab = ref("account")

const handleLoginClick = () => {
  if (currentTab.value === "account") {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    console.log("phoneRef调用loginAction")
  }
}
</script>

<template>
  <div class="loging-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user-filled /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<style lang="less">
.loging-panel {
  width: 320px;
  margin-bottom: 150px;
  .title {
    text-align: center;
    font-size: 30px;
  }
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
