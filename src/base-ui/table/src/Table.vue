<script lang="ts" setup>
import {
  defineProps,
  withDefaults,
  toRefs,
  defineEmits
} from "@vue/runtime-core"

interface Props {
  title?: string
  listData?: any[]
  listCount?: number
  propList?: any[]
  showIndexColumn?: boolean
  showSelectColumn?: boolean
  page?: object
  childrenProps?: object
  showFooter?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  title: "",
  listData: () => [],
  listCount: 0,
  showIndexColumn: false,
  showSelectColumn: false,
  page: () => ({ currentPage: 0, pageSize: 10 }),
  childrenProps: () => ({}),
  showFooter: true
})

const { listData, propList, page } = toRefs(props)

const emit = defineEmits<{
  (e: "handleSelectionChange", value: any): void
  (e: "updata:page", value: object): void
}>()
const handleSelectionChange = (value: any) => {
  emit("handleSelectionChange", value)
}
const handleCurrentChange = (currentPage: number) => {
  emit("updata:page", { ...page, currentPage })
}
const handleSizeChange = (pageSize: number) => {
  emit("updata:page", { ...page, pageSize })
}
</script>

<template>
  <div class="hx-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handle">
          <slot name="headerHandle"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="item in propList" :key="item.name">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          v-model:currentPage="page.currentPage"
          v-model:page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        />
      </slot>
    </div>
  </div>
</template>

<style lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    justify-content: flex-end;
  }
}
</style>
