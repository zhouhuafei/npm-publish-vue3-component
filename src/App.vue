<template>
  <div id="main">
    <div style="margin-bottom: 5px;display: flex;align-items: center;">
      <HelloWorld1 msg="HelloWorld1" />
      <HelloWorld2 msg="HelloWorld2" style="margin-left: 5px;" />
      <V3Button1 msg="V3Button1" style="margin-left: 5px;" />
      <V3Button2 msg="V3Button2" style="margin-left: 5px;" />
      <V3PaginationSelect
        style="margin-left: 5px; width: 100px;"
        v-model="V3PaginationSelectFields.value"
        :paginationAttrs="{}"
        :getList="V3PaginationSelectMethods.getList"
      />
      {{ V3PaginationSelectFields.value }}
    </div>
    <div style="width: 415px;height: 415px;">
      <V3JsonXmlFormat />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const V3PaginationSelectFields = reactive({
  value: ''
})
const V3PaginationSelectMethods = {
  async getList ({ pageNo, pageSize }: { pageNo: number, pageSize: number }) {
    console.log('getList pageNo：', pageNo)
    console.log('getList pageSize：', pageSize)
    return {
      list: [
        { label: '选项1', value: '1' },
        { label: '选项2', value: '2' },
        { label: '选项3', value: '3' }
      ],
      total: 3
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#main {
  padding: 5px;
}
</style>
