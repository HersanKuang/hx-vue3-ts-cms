<script lang="ts" setup>
import PageContent from "@/components/page-content"
import { contentTableConfig } from "./config/content.config"
</script>

<template>
  <div class="menu">
    <page-content :contentTableConfig="contentTableConfig" pageName="menu" />
  </div>
</template>

<style lang="less" scoped></style>
