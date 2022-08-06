<script lang="ts" setup>
import { ref, withDefaults, watch } from "vue"
import { useStore } from "vuex"
import hxForm from "@/base-ui/form"

interface Props {
  modalConfig: any
  defaultInfo: any
  otherInfo?: object
  pageName: string
}
const props = withDefaults(defineProps<Props>(), {
  defaultInfo: () => ({}),
  otherInfo: () => ({})
})

const dialogVisible = ref(false)
defineExpose({ dialogVisible })
const formData = ref<any>({})

// 数据回显
watch(
  () => props.defaultInfo,
  (newValue) => {
    for (const item of props.modalConfig.formItems) {
      formData.value[`${item.field}`] = newValue[`${item.field}`]
    }
  },
  {
    deep: true
  }
)

// 点击确定按钮的逻辑
const store = useStore()
const handleConfirmClick = () => {
  dialogVisible.value = false
  if (Object.keys(props.defaultInfo).length) {
    // 编辑
    store.dispatch("system/editPageDataAction", {
      pageName: props.pageName,
      editData: { ...formData.value, ...props.otherInfo },
      id: props.defaultInfo.id
    })
  } else {
    // 新建
    store.dispatch("system/createPageDataAction", {
      pageName: props.pageName,
      newData: { ...formData.value, ...props.otherInfo }
    })
  }
}
</script>

<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="modalConfig.title"
      width="30%"
      center
      destroy-on-close
    >
      <hx-form v-bind="props.modalConfig" v-model="formData" />
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less">
.page-modal {
  .header {
    width: 0;
    margin: 0 !important;
  }
  .hx-form {
    padding-right: 26px;
  }
}
</style>
