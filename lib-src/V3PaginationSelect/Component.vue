<template>
  <el-select clearable filterable class="V3PaginationSelect">
    <el-option
      v-for="option in thisFields.list"
      :key="option.value"
      :label="option.label"
      :value="option"
    />
    <div style="padding: 6px 6px 0;">
      <el-pagination
        size="small"
        :total="thisFields.total"
        :current-page="thisFields.pageNo"
        :page-size="thisFields.pageSize"
        @size-change="thisMethods.sizeChange"
        @current-change="thisMethods.pageChange"
        layout="total, sizes, prev, pager, next, jumper"
      />
    </div>
    <!--<div class="ui-select-pagination-wrap">
      <div class="ui-select-search">
        <el-input class="mr12" clearable placeholder="可根据坑位名称进行搜索" v-model="searchFields.name" size="small" @keydown.enter="searchMethods.search" />
        <el-button type="primary" @click="searchMethods.search" size="small">搜索</el-button>
        <el-button @click="searchMethods.reset" size="small">重置</el-button>
      </div>
      <div class="ui-select-pagination-option-wrap">
        <el-option
          v-for="type in searchAfterFields.list"
          :key="type.id"
          :label="type.name"
          :value="type.id"
        />
      </div>
      <div class="ui-select-pagination">
        <el-pagination
          small
          background
          :current-page="pageFields.pageNo"
          :page-size="pageFields.pageSize"
          :layout="`prev, pager, next, jumper`"
          :pager-count="5"
          :page-sizes="appStore.paginationPageSizes"
          :total="searchAfterFields.total"
          @size-change="pageMethods.sizeChange"
          @current-change="pageMethods.pageChange"
        />
      </div>
    </div>-->
  </el-select>
</template>

<script lang="ts" setup>
// ********************************* import
import { onMounted, reactive, useAttrs } from 'vue'
// ********************************* defineOptions
// ********************************* const and let
// const attrs = useAttrs()
// ********************************* props and emits
const props = defineProps({
  paginationAttrs: {
    type: Object,
    default: () => ({})
  },
  getList: {
    type: Function,
    required: true
  }
})
// ********************************* thisFields and thisMethods and lifetimes
const thisFields = reactive({
  list: [],
  total: 0,
  pageNo: 1,
  pageSize: 10
})
const thisMethods = {
  async getList () {
    const resData = await props.getList({
      pageNo: thisFields.pageNo,
      pageSize: thisFields.pageSize
    })
    thisFields.list = resData.list
    thisFields.total = resData.total
  },
  pageChange (e: number) {
    thisFields.pageNo = e
    thisMethods.getList()
  },
  sizeChange (e: number) {
    thisFields.pageSize = e
    thisMethods.getList()
  }
}
onMounted(() => {
  thisMethods.getList()
})
// ********************************* otherFields and otherMethods
// ********************************* computedFields and watch
// ********************************* defineExpose
</script>

<style scoped lang="scss">
@use "./index" as *;
</style>
