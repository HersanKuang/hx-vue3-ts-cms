<script lang="ts" setup>
import { computed } from "vue"
import { useStore } from "@/store"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"
import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModal } from "@/hooks/usePageModal"
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"

const [pageContentRef] = usePageSearch()
// modal配置信息
const store = useStore()
const modalConfigRef = computed(() => {
  const parentIdItem = modalConfig.formItems.find(
    (item) => item.field === "parentId"
  )
  parentIdItem!.options = store.state.entireDepartment.map((item) => {
    return { title: item.name, value: item.id }
  })
  return modalConfig
})

// 处理modal的hook
const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
  usePageModal()
</script>

<template>
  <div class="department">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      pageName="department"
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    />
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
      pageName="department"
    />
  </div>
</template>

<style lang="less"></style>
