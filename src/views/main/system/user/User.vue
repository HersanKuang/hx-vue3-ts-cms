<script lang="ts" setup>
import { computed } from "@vue/runtime-core"
import { useStore } from "@/store"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"
import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModal } from "@/hooks/usePageModal"

// pageModal相关的hook逻辑
// 1.处理密码的逻辑
const newCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === "password"
  )
  passwordItem!.isHidden = false
}
const editCallBack = () => {
  const passwordItem = modalConfig.formItems.find(
    (item) => item.field === "password"
  )
  passwordItem!.isHidden = true
}

// 2.动态添加部门和角色列表
const store = useStore()
const modalConfigRef = computed(() => {
  const departmentItem = modalConfig.formItems.find(
    (item) => item.field === "departmentId"
  )
  departmentItem!.options = store.state.entireDepartment.map((item) => ({
    title: item.name,
    value: item.id
  }))
  const roleItem = modalConfig.formItems.find((item) => item.field === "roleId")
  roleItem!.options = store.state.entireRole.map((item) => ({
    title: item.name,
    value: item.id
  }))
  return modalConfig
})

// 3.调用hook获取公共变量和函数
const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
const [pageModalRef, defaultInfo, handleNewData, handleEditData] = usePageModal(
  newCallBack,
  editCallBack
)
</script>

<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <div class="content">
      <page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      />
    </div>
    <page-modal
      :modalConfig="modalConfigRef"
      ref="pageModalRef"
      pageName="users"
      :defaultInfo="defaultInfo"
    />
  </div>
</template>

<style scoped lang="less"></style>
