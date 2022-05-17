<script lang="ts" setup>
import { defineProps, withDefaults } from "vue"
import HxCounterUp from "@/base-ui/count-up"
import { Warning } from "@element-plus/icons-vue"

interface Props {
  panelData: object
}
const props = withDefaults(defineProps<Props>(), {
  panelData: () => ({})
})

const counterOption1 = {
  decimalPlaces: 0, // 保留两位
  prefix: "" // 单位
}
const counterOption2 = {
  decimalPlaces: 0, // 保留两位
  prefix: "￥" // 单位
}
</script>

<template>
  <div class="statistical">
    <div class="header">
      <span>{{ props.panelData.title }}</span>
      <el-tooltip :content="panelData.tips" placement="top" effect="light">
        <el-icon><warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <hx-counter-up
        :number="panelData.number1"
        :option="
          panelData.amount === 'saleroom' ? counterOption2 : counterOption1
        "
      />
    </div>
    <div class="footer">
      <span>
        {{ panelData.subtitle }}
        <hx-counter-up
          :number="panelData.number2"
          :option="
            panelData.amount === 'saleroom' ? counterOption2 : counterOption1
          "
        />
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">
@h: 38px;

.statistical {
  display: flex;
  padding: 0 20px;
  background: white;
  flex-direction: column;
  justify-content: flex-start;
  // box-shadow: 0 2px 12px 0 rgb(0 0 0, 0.1);

  height: 130px;
  margin-bottom: 20px;
  overflow: hidden;
  text-align: left;

  .header {
    display: flex;
    height: @h;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    // border: 1px solid red;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .content {
    display: flex;
    margin-left: 0px;
    font-size: 26px;
    color: rgba(0, 0, 0, 0.85);
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .footer {
    display: flex;
    height: @h;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(0, 0, 0, 0.85);
    border-top: 1px solid #f0f0f0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
