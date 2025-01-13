<template>
  <div class="flex__box">
    <div class="tabs__box">
      <Tabs @chooseHandle="showComponent" />
    </div>
    <div class="components__main--box">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>
<script setup>
import { shallowRef, markRaw, defineAsyncComponent } from "vue"
import Tabs from "@/components/tabs/index.vue"

let currentComponent = shallowRef(defineAsyncComponent(() =>
    import(`@/components/avatar/index.vue`)
  ))

const showComponent = async (key) => {
  currentComponent.value = defineAsyncComponent(() =>
    import(`@/components/${key}/index.vue`)
  )
}
</script>

<style lang="less" scoped>
.flex__box {
  width: 100vw;
  height: 100vh;
  background-color: black;
  .components__main--box {
    height: calc(100vh - 40px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
