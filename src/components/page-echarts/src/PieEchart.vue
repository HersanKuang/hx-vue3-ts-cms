<script lang="ts" setup>
import { defineProps, computed } from "vue"
import BaseEchart from "@/base-ui/echart"
import { IDataType } from "../types"

interface Props {
  pieData: IDataType[]
}
const props = defineProps<Props>()

const pieOption = computed(() => {
  return {
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "horizontal",
      left: "left"
    },
    series: [
      {
        name: "分类数据",
        type: "pie",
        radius: "50%",
        bottom: "-10%",
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  }
})
</script>

<template>
  <div class="pie-echart">
    <base-echart :options="pieOption" />
  </div>
</template>

<style lang="less"></style>
