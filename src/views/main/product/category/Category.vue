<script lang="ts" setup>
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"

import { usePageSearch } from "@/hooks/usePageSearch"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>

<template>
  <div class="category">
    <page-search
      :searchFormConfig="searchFormConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleResetClick"
    />
    <page-content
      ref="pageContentRef"
      pageName="category"
      :contentTableConfig="contentTableConfig"
    ></page-content>
  </div>
</template>

<style lang="less"></style>
