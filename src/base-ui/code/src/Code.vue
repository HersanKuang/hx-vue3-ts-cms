<script lang="ts" setup>
import { ref, defineProps, withDefaults, watchEffect } from "vue"
import hljs from "highlight.js"
import "highlight.js/styles/github.css"

interface Props {
  language: string
  code: string
}
const props = withDefaults(defineProps<Props>(), {
  language: "html",
  code: ""
})
const highlightedCode = ref<string>("")
watchEffect(() => {
  highlightedCode.value = hljs.highlight(props.code, {
    language: props.language
  }).value
})
</script>

<template>
  <div class="hx-code">
    <pre class="bg">
      <code :class="'language'+language" v-html="highlightedCode" />
    </pre>
  </div>
</template>

<style lang="less" scoped>
.bg {
  padding: 10px;
  text-align: left;
  background: #f0f0f0;
}
</style>
