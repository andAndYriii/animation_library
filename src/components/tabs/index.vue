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
  width: calc(100vw - 40px);
  margin: 0 20px;
  display: flex;
  .tabs__item--box {
    font-size: 12px;
    padding: 6px 2px;
    cursor: pointer;
    color: white;
    &:hover {
      color: white;
      font-weight: 900;
      border-bottom: 2px solid red;
    }
  }
  .tabs__item--select {
    color: white;
    font-weight: 900;
    border-bottom: 2px solid red;
  }
}
</style>
