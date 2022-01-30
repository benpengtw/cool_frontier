<template>
  <div class="w-full FLEX_C">
    <div class="flex flex-grow">
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
<style lang="less" scoped></style>
