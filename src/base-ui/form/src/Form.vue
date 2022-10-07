<script lang="ts" setup>
import { withDefaults, toRefs } from "vue"
import { IFormItem } from "../types"

interface Props {
  modelValue: any
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: object
  colLayout?: object
}
const props = withDefaults(defineProps<Props>(), {
  formItems: () => [],
  labelWidth: "100px",
  itemStyle: () => ({}),
  colLayout: () => ({
    xl: 6, // >1920px 4个
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  })
})

const { formItems, labelWidth, itemStyle, colLayout } = toRefs(props)

const emit = defineEmits<{
  (e: "update:modelValue", value: any): void
}>()

const handleValueChange = (value: any, field: string) => {
  emit("update:modelValue", { ...props.modelValue, [field]: value })
}
</script>

<template>
  <div class="hx-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :rules="item.rules"
              :style="itemStyle"
            >
              <!-- <el-input></el-input> -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :show-password="item.type === 'password'"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.title"
                    :value="option.value"
                  />
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="less"></style>
