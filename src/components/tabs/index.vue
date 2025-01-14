<template>
  <div class="tabs__main--box">
    <div
      class="tabs__item--box"
      :class="{ 'tabs__item--select': _index == index }"
      v-for="(item, index) in tabsItme"
      :key="index"
      @click="chooseHandle(item, index)"
    >
      {{ item.name }}
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, defineEmits } from "vue"
import { tabs } from "@/assets/tabs-item"

const emit = defineEmits()
const _index = ref(0)

const tabsItme = reactive(tabs)

const chooseHandle = (item, index) => {
  _index.value = index
  emit("chooseHandle", item.key)
}
</script>

<style lang="less" scoped>
.tabs__main--box {
  width: 100%;
  .tabs__item--box {
    text-align: left;
    font-size: 12px;
    padding: 6px 0;
    cursor: pointer;
    color: greenyellow;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 90%;
      height: 3px;
      background-color: brown;
      transform: translateX(-100%);
      transition: transform 0.3s;
    }
    &:hover {
      font-weight: 999;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 90%;
        height: 3px;
        background-color: brown;
        transform: translateX(-70%);
        transition: transform 0.3s;
      }
    }
  }
  .tabs__item--select {
    color: greenyellow;
    position: relative;
    font-weight: 999;
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 90%;
        height: 3px;
        background-color: brown;
        transform: translateX(-70%);
        transition: transform 0.3s;
      }
  }
}
</style>
