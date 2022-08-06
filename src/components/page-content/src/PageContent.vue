<script lang="ts" setup>
import { computed, ref, watch } from "vue"
import { useStore } from "@/store"
import HxTable from "@/base-ui/table"
import { EditPen, Delete } from "@element-plus/icons-vue"
import { usePermission } from "@/hooks/usePermission"

interface Props {
  contentTableConfig: any
  pageName: string
}
const props = defineProps<Props>()

const store = useStore()

// 0.获取操作的权限
const isCreate = usePermission(props.pageName, "create")
const isUpdate = usePermission(props.pageName, "update")
const isDelete = usePermission(props.pageName, "delete")
const isQuery = usePermission(props.pageName, "query")

// 1.双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(
  pageInfo,
  () => {
    getPageData()
  },
  {
    deep: true
  }
)

// 2.发送网络请求
const getPageData = (queryInfo: any = {}) => {
  if (!isQuery) return
  store.dispatch("system/getPageListAction", {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageData()
defineExpose({ getPageData })

// 3.从vuex中获取数据
const dataList = computed(() =>
  store.getters[`system/pageListData`](props.pageName)
)
const dataCount = computed(() =>
  store.getters[`system/pageListCount`](props.pageName)
)

// 4.获取其他的动态插槽名称
const otherPropSlots = props.contentTableConfig?.propList.filter(
  (item: any) => {
    if (item.slotName === "status") return false
    if (item.slotName === "createAt") return false
    if (item.slotName === "updateAt") return false
    if (item.slotName === "handle") return false
    return true
  }
)
// 5.删除/编辑/新建操作
const handleDeleteClick = (item: any) => {
  console.log(item)
  store.dispatch("system/deletePageDataAction", {
    pageName: props.pageName,
    id: item.id
  })
}
const emit = defineEmits<{
  (e: "newBtnClick"): void
  (e: "editBtnClick", value: any): void
}>()
const handleNewClick = () => {
  emit("newBtnClick")
}
const handleEditClick = (item: any) => {
  emit("editBtnClick", item)
}
</script>

<template>
  <div class="page-content">
    <hx-table
      :listData="dataList"
      v-bind="props.contentTableConfig"
      :listCount="dataCount"
      v-model:page="pageInfo"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandle>
        <el-button
          v-if="isCreate"
          type="primary"
          size="default"
          @click="handleNewClick"
        >
          {{ contentTableConfig.newBtnTitle ?? "新建数据" }}
        </el-button>
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handle="scope">
        <div class="handle-btns">
          <el-button
            v-if="isUpdate"
            size="small"
            type="text"
            @click="handleEditClick(scope.row)"
            ><el-icon><edit-pen /></el-icon>编辑</el-button
          >
          <el-button
            v-if="isDelete"
            size="small"
            type="text"
            @click="handleDeleteClick(scope.row)"
            ><el-icon><delete /></el-icon>删除</el-button
          >
        </div>
      </template>

      <!-- 3.在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </hx-table>
  </div>
</template>

<style lang="less">
.page-content {
  padding: 0 20px 20px 20px;
  border-top: 20px solid #f5f5f5;
  .el-icon {
    margin-right: 4px;
  }
}
</style>
