<script lang="ts" setup>
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
</script>

<template>
  <div class="goods">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="cover"
          preview-teleported
        />
      </template>
      <template #oldPrice="scope">{{ "¥" + scope.row.oldPrice }}</template>
      <template #newPrice="scope">{{ "¥" + scope.row.newPrice }}</template>
    </page-content>
  </div>
</template>

<style lang="less"></style>
