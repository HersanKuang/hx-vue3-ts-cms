<script lang="ts" setup>
import LoginPanel from "./cpns/LoginPanel.vue"
</script>

<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<style lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/login-bg.svg");
}
</style>
