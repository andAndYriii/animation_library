<template>
<div class="flex__box">
  <component :is="currentComponent"></component>
</div>
</template>
<script setup>
import HelloWorld from "@/components/avatar/index.vue";
import { reactive, defineAsyncComponent } from "vue";

let currentComponent = defineAsyncComponent(async () =>
  import(`@/components/avatar/index.vue`)
)
</script>

<style scoped>
.flex__box {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
