<template>
  <div class="flex__box" :style="{ 'background-color': themeColor }">
    <div class="switch__module--box">
      <moduleSwitch @changeHandle="changeTheme" />
    </div>
    <div class="tabs__box">
      <Tabs @chooseHandle="showComponent" />
    </div>
    <div class="components__main--box">
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>
<script setup>
import {ref, shallowRef, markRaw, defineAsyncComponent } from "vue"
import Tabs from "@/components/tabs/index.vue"
import moduleSwitch from '@/components/moduleSwitch/index.vue'

let themeColor = ref('black')

let currentComponent = shallowRef(defineAsyncComponent(() =>
    import(`@/components/avatar/index.vue`)
  ))

const showComponent = async (key) => {
  currentComponent.value = defineAsyncComponent(() =>
    import(`@/components/${key}/index.vue`)
  )
}

const changeTheme = (e) => {
  themeColor.value = e ? 'black' : 'white'
}
</script>

<style lang="less" scoped>
.flex__box {
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  .switch__module--box {
    position: fixed;
    top: 10px;
    right: 10px;
  }
  .tabs__box {
    width: 100px;
  }
  .components__main--box {
    width: calc(100vw - 100px);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
