<script lang="ts" setup>
import { computed, withDefaults } from "vue"
import BaseEchart from "@/base-ui/echart"
type EChartsOption = echarts.EChartsOption

interface Props {
  title?: string
  xLabels: string[]
  values: any[]
}
const props = withDefaults(defineProps<Props>(), {
  title: ""
})
const options = computed<EChartsOption>(() => {
  return {
    title: {
      text: props.title
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: props.xLabels
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "分类销量统计",
        type: "line",
        stack: "总量",
        areaStyle: {},
        emphasis: {
          focus: "series"
        },
        data: props.values
      }
    ]
  }
})
</script>

<template>
  <div class="line-echart">
    <base-echart ref="baseEchart" :options="options" />
  </div>
</template>

<style lang="less"></style>
