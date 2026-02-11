<template>
  <div class="v3Button1">
    {{ props.msg }}
  </div>
</template>

<script lang="ts" setup>
// ********************************* import
// ********************************* defineOptions
defineOptions({ name: 'V3Button1' })
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
// ********************************* defineOptions
</script>

<style scoped lang="scss">
@use "./index" as *;
</style>
