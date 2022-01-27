<template>
  <div class="w-full FLEX_C">
    <div
      :class="
        currentPath !== '/' ? 'flex flex-grow bg-black' : 'flex flex-grow'
      "
    >
      <router-view />
    </div>
  </div>
</template>

//
<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const currentPath = computed(() => {
  // console.log("route changed", router.currentRoute.value.path);
  return router.currentRoute.value.path;
});
</script>
<style lang="less" scoped>
::v-deep(.van-tabs__nav--line) {
  padding-bottom: 1.5rem;
}
</style>
