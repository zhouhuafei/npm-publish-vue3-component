<template>
  <div id="main">
    <div style="margin-bottom: 5px;display: flex;align-items: center;">
      <HelloWorld1 msg="HelloWorld1" />
      <HelloWorld2 msg="HelloWorld2" style="margin-left: 5px;" />
      <V3Button1 msg="V3Button1" style="margin-left: 5px;" />
      <V3Button2 msg="V3Button2" style="margin-left: 5px;" />
    </div>
    <div style="width: 415px;height: 415px;">
      <V3JsonXmlFormat />
    </div>
  </div>
</template>

<script setup lang="ts">
import HelloWorld1 from '@/components/HelloWorld1/index.vue'
import HelloWorld2 from '@/components/HelloWorld2/index.tsx'
import { V3Button1, V3Button2, V3JsonXmlFormat } from '../lib-src'
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
