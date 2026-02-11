<template>
  <div class="HelloWorld1">{{ props.msg }}</div>
</template>

<script lang="ts" setup>
// ********************************* import
// ********************************* defineOptions
defineOptions({ name: 'HelloWorld1' })
// ********************************* const and let
// ********************************* props and emits
const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})
// ********************************* thisFields and thisMethods and lifetimes
// ********************************* otherFields and otherMethods
// ********************************* computedFields and watch
// ********************************* defineExpose
</script>

<style lang="scss" scoped>
.HelloWorld1 {
  width: 100px;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid black;
}
</style>
