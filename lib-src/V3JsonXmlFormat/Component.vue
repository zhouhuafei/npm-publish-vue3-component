<template>
  <div class="V3JsonXmlFormatWrap">
    <pre ref="V3JsonXmlFormatRef" class="V3JsonXmlFormat" contenteditable></pre>
    <el-button size="small" type="primary" class="V3JsonXmlFormatButton" @click="format">格式化</el-button>
  </div>
</template>

<script lang="ts" setup>
// ********************************* import
import { ref } from 'vue'
import xmlFormatter from 'xml-formatter'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import json from 'highlight.js/lib/languages/json'
import 'highlight.js/styles/github.css'
// ********************************* defineOptions
defineOptions({ name: 'V3JsonXmlFormat' })
// ********************************* const and let
const V3JsonXmlFormatRef = ref()
// ********************************* props and emits
const emits = defineEmits(['format'])
// ********************************* thisFields and thisMethods and lifetimes
// ********************************* otherFields and otherMethods
hljs.registerLanguage('xml', xml) // 注册 XML 语言
hljs.registerLanguage('json', json) // 注册 JSON 语言
const format = () => {
  try {
    V3JsonXmlFormatRef.value.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    const preText = V3JsonXmlFormatRef.value.innerText.trim()
    if (preText.startsWith('<')) {
      const value = xmlFormatter(preText, {
        indentation: '  ',
        lineSeparator: '\n',
        collapseContent: true
      })
      V3JsonXmlFormatRef.value.innerHTML = hljs.highlight(value, { language: 'xml' }).value
      emits('format', value)
    } else {
      const value = JSON.stringify(JSON.parse(preText), null, 2)
      V3JsonXmlFormatRef.value.innerHTML = hljs.highlight(value, { language: 'json' }).value
      emits('format', value)
    }
  } catch (error) {
    console.log(error)
  }
}
// ********************************* computedFields and watch
// ********************************* defineExpose
</script>

<style scoped lang="scss">
@use "./index" as *;
</style>
