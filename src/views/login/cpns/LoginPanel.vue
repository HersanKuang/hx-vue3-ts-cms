<script lang="ts" setup>
import { ref } from "vue"
import LoginAccount from "./LoginAccount.vue"
import { UserFilled } from "@element-plus/icons-vue"

const isKeepPassword = ref(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()

const handleLoginClick = () => {
  accountRef.value?.loginAction(isKeepPassword.value)
}
</script>

<template>
  <div class="loging-panel">
    <h2 class="title">后台管理系统</h2>
    <el-card shadow="never" class="card-box">
      <template #header>
        <div class="custom-label">
          <el-icon><user-filled /></el-icon>
          <span>用户登陆</span>
        </div>
      </template>
      <login-account ref="accountRef" />
    </el-card>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick">
      立即登录
    </el-button>
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
  .card-box {
    width: 320px;
    .custom-label .el-icon {
      vertical-align: middle;
    }
    .custom-label span {
      vertical-align: middle;
      margin-left: 4px;
    }
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
}
</style>
