<script lang="ts" setup>
import { ref } from "vue"
import HxForm from "@/base-ui/form"
import { Refresh, Search } from "@element-plus/icons-vue"

interface Props {
  searchFormConfig: any
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: "resetBtnClick"): void
  (e: "queryBtnClick", value: any): void
}>()

// 双向绑定的熟悉应该是由配置文件的field来决定
// 1.优化一：formData中的属性应该动态来决定
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ""
}

const formData = ref(formOriginData)

// 2.优化二: 当用户点击重置
const handleResetClick = () => {
  formData.value = formOriginData
  emit("resetBtnClick")
}

// 3.优化三：当用户点击搜索
const handleQueryClick = () => {
  emit("queryBtnClick", formData.value)
}
</script>

<template>
  <div class="page-search">
    <hx-form v-bind="props.searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="handleResetClick"
            ><el-icon :size="15" class="footer-icon"><refresh /></el-icon
            >重置</el-button
          >
          <el-button type="primary" @click="handleQueryClick"
            ><el-icon :size="15" class="footer-icon"><search /></el-icon
            >搜索</el-button
          >
        </div>
      </template>
    </hx-form>
  </div>
</template>

<style lang="less" scope>
.page-search {
  .hx-form {
    padding-top: 22px;
    padding-right: 50px;

    .header {
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 30px;
      color: red;
    }
    .handle-btns {
      text-align: right;
      padding: 0 10px 20px 0;

      .footer-icon {
        margin-right: 4px;
      }
    }
  }
}
</style>
