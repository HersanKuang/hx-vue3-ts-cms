<script lang="ts" setup>
import { withDefaults, onMounted, ref, watch } from "vue"
// http://inorganik.github.io/countUp.js/
import { CountUp } from "countup.js"
import type { CountUpOptions } from "countup.js"

interface Props {
  number: number
  option: object
}
const props = withDefaults(defineProps<Props>(), {
  number: 0,
  option: () => ({})
})
const defaultOptions: CountUpOptions = {
  decimalPlaces: 2, // 保留两位
  duration: 2, // 动画时长
  separator: ",", // 千位分割
  decimal: ".", // 小数分割
  prefix: "￥" // 单位
}
const counterRef = ref<HTMLDivElement | null>(null)
const instance = ref<CountUp | null>(null)

watch(
  () => props.number,
  () => {
    update(props.number)
  },
  {
    deep: true
  }
)
onMounted(() => {
  createCounter()
})

const createCounter = () => {
  if (!counterRef.value) return
  const opts: CountUpOptions = Object.assign(defaultOptions, props.option)
  instance.value = new CountUp(counterRef?.value, props.number, opts)
  start()
}

const start = () => {
  if (!instance.value) return
  instance?.value.start()
}
const update = (number: number) => {
  if (!instance.value) return
  instance?.value.update(number)
}
</script>

<template>
  <span ref="counterRef" />
</template>

<style scoped lang="less"></style>
