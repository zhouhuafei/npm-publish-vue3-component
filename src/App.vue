<template>
  <div id="main">
    <div style="margin-bottom: 5px;display: flex;align-items: center;">
      <HelloWorld1 msg="HelloWorld1" />
      <HelloWorld2 msg="HelloWorld2" style="margin-left: 5px;" />
      <IconCommunity style="margin-left: 5px;" />
      <IconDocumentation style="margin-left: 5px;" />
      <IconEcosystem style="margin-left: 5px;" />
      <IconSupport style="margin-left: 5px;" />
      <IconTooling style="margin-left: 5px;" />
      <V3Button1 msg="V3Button1" style="margin-left: 5px;" />
      <V3Button2 msg="V3Button2" style="margin-left: 5px;" />
      <V3PaginationSelect
        style="margin-left: 5px; width: 205px;"
        v-model="V3PaginationSelectFields.value"
        :getList="V3PaginationSelectMethods.getList"
      />
      <div style="margin-left: 5px;">{{ V3PaginationSelectFields.value }}</div>
    </div>
    <div style="width: 542px;height: 76px;">
      <V3JsonXmlFormat />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const V3PaginationSelectFields = reactive({
  value: { label: '选项99936', value: '99936' }
})
const V3PaginationSelectMethods = {
  async getList ({ name, pageNo, pageSize }: { name: '', pageNo: number, pageSize: number }) {
    console.log('getList name：', name)
    console.log('getList pageNo：', pageNo)
    console.log('getList pageSize：', pageSize)
    const listLength = 10
    return {
      list: [...Array(listLength)].map((_, i) => ({
        label: `选项${(pageNo - 1) * pageSize + i + 1}`,
        value: `${(pageNo - 1) * pageSize + i + 1}`
      })),
      total: 99990
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
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;
}
</style>
