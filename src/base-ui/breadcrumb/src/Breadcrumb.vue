<script lang="ts" setup>
import { withDefaults, toRefs } from "vue"
import { IBreadcrumb } from "../types"

interface Props {
  breadcrumbs: IBreadcrumb[]
}
const props = withDefaults(defineProps<Props>(), {
  breadcrumbs: () => []
})

const { breadcrumbs } = toRefs(props)
</script>

<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style lang="less">
.nav-breadcrumb {
  .el-breadcrumb {
    font-size: 17px;
  }
}
</style>
