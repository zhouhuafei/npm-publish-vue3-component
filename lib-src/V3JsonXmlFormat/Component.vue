<template>
  <div class="V3JsonXmlFormatWrap">
    <div class="V3JsonXmlFormat" contenteditable></div>
    <el-button type="primary" class="V3JsonXmlFormatButton">格式化</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'V3JsonXmlFormat'
})
</script>

<style scoped lang="scss">
@use "./index" as *;
</style>
