<script lang="ts" setup>
import {
  ref,
  onMounted,
  defineProps,
  withDefaults,
  watchEffect
} from "@vue/runtime-core"
import { EChartsOption } from "echarts"
import useEchart from "../hooks/useEchart"

// 定义props
interface Props {
  options: EChartsOption
  width?: string
  height?: string
}
const props = withDefaults(defineProps<Props>(), {
  width: "100%",
  height: "360px"
})

const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<style lang="less"></style>
