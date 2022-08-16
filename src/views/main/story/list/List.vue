<script lang="ts" setup>
import PageContent from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"
</script>

<template>
  <div class="list">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="story"
    ></page-content>
  </div>
</template>

<style lang="less" scoped></style>
