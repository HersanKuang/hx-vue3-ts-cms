<script lang="ts" setup>
import {
  watch,
  onMounted,
  onBeforeUnmount,
  ref,
  reactive,
  withDefaults
} from "vue"
import type Editor from "wangeditor"
import WangEditor from "wangeditor"
export interface EditorInfo {
  html: string
  text: string
}

interface Props {
  value: string
  zIndex?: number
  height?: number
  width?: number
  focus?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  // 数据双向绑定
  value: "",
  zIndex: 500,
  height: 500,
  width: 0,
  focus: false
})

const emit = defineEmits(["update:value"])

const editorRef = ref<HTMLDivElement | null>(null)
const isInitContent = ref<boolean>(false)
const content = reactive<EditorInfo>({
  html: "",
  text: ""
})
const instance = ref<Editor | null>(null)

watch(
  () => props.value,
  () => {
    initEditorContent(props.value, true)
  }
)

onMounted(() => {
  createWangEditor()
})

onBeforeUnmount(() => {
  if (!instance.value) return
  instance.value.destroy()
  instance.value = null
})

const createWangEditor = () => {
  instance.value = new WangEditor(editorRef.value)
  setEditorConfig()
  instance.value.create()
  // create 之后才能初始化
  // initEditorContent(props.defaultHtmlStr)
  initEditorContent(props.value)
}

const initEditorContent = (htmlStr: string, isFocus = false) => {
  if (!instance.value) return
  const editor: Editor = instance.value as Editor
  editor.config.focus = isFocus
  if (!htmlStr) return
  isInitContent.value = true
  editor.txt.html(htmlStr)
}

const setEditorConfig = () => {
  if (!instance.value) return
  const editor: Editor = instance.value as Editor
  // 设置编辑区域高度为 500px
  editor.config.height = props.height
  // 设计z-index
  editor.config.zIndex = props.zIndex
  // 取消自动 focus
  editor.config.focus = props.focus
  // 配置 onchange 回调函数
  editor.config.onchange = function (newHtml: string) {
    content.html = newHtml
    content.text = editor.txt.text()
    if (!isInitContent.value) {
      emit("update:value", content.html)
      console.log("xx")
    }
    // 最后标记为 false
    isInitContent.value = false
    // emit('onChange', content.html, content.text)
  }
  // 配置触发 onchange 的时间频率，默认为 200ms
  editor.config.onchangeTimeout = 500 // 修改为 500ms
  // 配置菜单栏，删减菜单，调整顺序
  editor.config.menus = [
    "head",
    "bold",
    "fontSize",
    "fontName",
    "italic",
    "underline",
    "strikeThrough",
    "indent",
    "lineHeight",
    "foreColor",
    "backColor",
    "link",
    "list",
    // 'todo',
    "justify",
    "quote",
    // 'emoticon',
    // 'image',
    // 'video',
    // 'table',
    "code",
    "splitLine",
    "undo",
    "redo"
  ]
}
</script>

<template>
  <div
    ref="editorRef"
    class="hx-editor"
    :style="{ width: width ? `${width}px` : '100%' }"
  ></div>
</template>

<style lang="less" scoped>
.hx-editor {
  text-align: left;
}
</style>
