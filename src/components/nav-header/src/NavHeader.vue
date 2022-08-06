<script lang="ts" setup>
import { ref, computed } from "vue"
import { useStore } from "@/store"
import { useRoute } from "vue-router"
import HxBreadcrumb from "@/base-ui/breadcrumb"
import { pathMapBreadcrumbs } from "@/utils/map-menus"
import { ArrowRight, ArrowLeft } from "@element-plus/icons-vue"

const store = useStore()
const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const route = useRoute()
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})

const isFold = ref(false)
const emit = defineEmits<{
  (e: "foldChange", value: boolean): void
}>()
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit("foldChange", isFold.value)
}
</script>

<template>
  <div class="nav-header">
    <el-icon class="fold-menu" :size="24" @click="handleFoldClick"
      ><component :is="isFold ? ArrowLeft : ArrowRight"
    /></el-icon>
    <div class="content">
      <hx-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<style lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
    display: flex;
    margin: auto;
    padding: 0 10px 0 0;
    width: 20px;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }
}
</style>
