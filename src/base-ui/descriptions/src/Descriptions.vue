<script lang="ts" setup>
import { withDefaults, toRefs } from "vue"

interface Props {
  title?: string
  column?: number
  tableData?: any[]
}
const props = withDefaults(defineProps<Props>(), {
  title: "",
  column: 1,
  tableData: () => []
})
const { title, column, tableData } = toRefs(props)
</script>

<template>
  <div class="description">
    <el-descriptions class="margin-top" :title="title" :column="column" border>
      <template v-for="(itemData, index) in tableData" :key="index">
        <el-descriptions-item>
          <template #label> {{ itemData.name }} </template>
          <el-tag size="small">{{ itemData.description }}</el-tag>
        </el-descriptions-item>
      </template>
    </el-descriptions>
  </div>
</template>

<style lang="less" scoped>
.description {
  margin-bottom: 20px;
}
</style>
