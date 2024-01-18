<script lang="ts" setup>
import { reactive, ref } from "vue"
import { ElForm } from "element-plus"
import { useStore } from "@/store"
import { rules } from "../config/account-config"
import localCache from "@/utils/cache"

const store = useStore()
const account = reactive({
  name: localCache.getCache("name") ?? "",
  password: localCache.getCache("password") ?? ""
})
const formRef = ref<InstanceType<typeof ElForm>>()
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid: any) => {
    if (valid) {
      // 1.判断是否需要记住密码
      if (isKeepPassword) {
        // 本地缓存
        localCache.setCache("name", account.name)
        localCache.setCache("password", account.password)
      } else {
        localCache.deleteCache("name")
        localCache.deleteCache("password")
      }
      // 2.开始进行登陆验证
      store.dispatch("login/accountLoginAction", { ...account })
    }
  })
}

defineExpose({
  loginAction
})
</script>

<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name" class="account">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" class="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.account {
  height: 68px;
}
:deep(.el-form-item__content) {
  margin-top: 6px;
}
</style>
