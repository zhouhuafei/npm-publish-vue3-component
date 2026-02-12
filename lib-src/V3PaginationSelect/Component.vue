<template>
  <el-select
    clearable
    filterable
    placeholder="请选择"
    popper-class="V3PaginationSelectPopperWrap"
    collapse-tags
    collapse-tags-tooltip
  >
    <template v-if="thisFields.list.length">
      <div class="V3PaginationSelectSearchWrap">
        <el-input
          placeholder="可在此处输入关键字进行远程数据搜索"
          clearable
          v-model="thisFields.name"
          size="small"
          @keydown.enter="thisMethods.search"
        >
          <template #append>
            <div class="V3PaginationSelectSearchButton" @click="thisMethods.search">搜索</div>
          </template>
        </el-input>
      </div>
      <div class="V3PaginationSelectOptionsWrap">
        <el-option
          v-for="option in thisFields.list"
          :key="option.value"
          :label="option.label"
          :value="option"
        />
      </div>
      <div class="V3PaginationSelectPaginationWrap">
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
    </template>
    <template v-if="!thisFields.list.length" #empty>
      <div class="V3PaginationSelectSearchWrap isEmpty">
        <el-input
          placeholder="可在此处输入关键字进行远程数据搜索"
          clearable
          v-model="thisFields.name"
          size="small"
          @keydown.enter="thisMethods.search"
        >
          <template #append>
            <div class="V3PaginationSelectSearchButton" @click="thisMethods.search">搜索</div>
          </template>
        </el-input>
      </div>
    </template>
  </el-select>
</template>

<script lang="ts" setup>
// ********************************* import
import { onMounted, reactive, useAttrs } from 'vue'
// ********************************* defineOptions
// ********************************* const and let
const attrs: any = useAttrs()
// ********************************* props and emits
const props = defineProps({
  getList: {
    type: Function,
    required: true
  }
})
// ********************************* thisFields and thisMethods and lifetimes
const thisFields = reactive({
  list: [],
  total: 0,
  name: '',
  pageNo: 1,
  pageSize: 10
})
const thisMethods = {
  search () {
    thisFields.pageNo = 1
    thisMethods.getList()
  },
  async getList () {
    const resData = await props.getList({
      name: thisFields.name,
      pageNo: thisFields.pageNo,
      pageSize: thisFields.pageSize
    })
    thisFields.list = resData.list
    thisFields.total = resData.total
    // if (attrs.modelValue) {
    //   if (attrs.multiple !== undefined) {
    //     if (attrs.modelValue.length) {
    //       attrs.modelValue.forEach((item: any) => {
    //         const findValue = thisFields.list.find((listItem: any) => listItem.value === item.value)
    //         if (!findValue) {
    //           thisFields.list.push(item)
    //         }
    //       })
    //     }
    //   } else {
    //     if (Object.keys(attrs.modelValue).length) {
    //       const findValue = thisFields.list.find((item: any) => item.value === attrs.modelValue.value)
    //       if (!findValue) {
    //         thisFields.list.push(attrs.modelValue)
    //       }
    //     }
    //   }
    // }
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

<style lang="scss">
.V3PaginationSelectPopperWrap {
  .el-scrollbar {
    .el-select-dropdown__wrap {
      $w: 412;
      height: $w + px;
      max-height: $w + px;
    }

    &.is-empty .el-select-dropdown__list {
      padding-top: 6px;

      .V3PaginationSelectSearchWrap {
        padding-bottom: 0;
      }
    }
  }
}
</style>
