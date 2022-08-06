<script lang="ts" setup>
import { computed } from "vue"
import BaseEchart from "@/base-ui/echart"
import { IDataType } from "../types"

interface Props {
  roseData: IDataType[]
}
const props = defineProps<Props>()

const options = computed(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: [10, 160],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData,
        label: {
          show: true
        }
      }
    ]
  }
})
</script>

<template>
  <div class="rose-echart">
    <base-echart :options="options" />
  </div>
</template>

<style lang="less"></style>
