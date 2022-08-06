<script lang="ts" setup>
import { withDefaults } from "vue"

interface Props {
  title: string
}
const props = withDefaults(defineProps<Props>(), {
  title: "Title"
})
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ props.title }}</span>
      </div>
    </template>
    <div class="item">
      <slot></slot>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.box-card {
  &:deep(.el-card__header) {
    padding: 10px 20px !important;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
}

.item {
  margin-bottom: 10px;
  // border: 1px solid red;
}
</style>
