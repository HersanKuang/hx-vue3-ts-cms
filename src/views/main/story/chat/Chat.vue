<script lang="ts" setup>
import { ref } from "vue"
import HxEditor from "@/base-ui/editor"
const htmlString = ref<string>("写下你的故事")
</script>

<template>
  <div class="chat">
    <hx-editor v-model:value="htmlString" />
  </div>
</template>

<style lang="less" scoped></style>
