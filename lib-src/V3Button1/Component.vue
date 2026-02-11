<template>
  <div class="v3Button1">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'V3Button1',
  props: {
    msg: String
  }
})
</script>

<style scoped lang="scss">
@use "./index" as *;
</style>
