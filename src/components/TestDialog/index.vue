<template lang="pug">
el-dialog(
  :title="props.data.email",
  v-model="dialogVisble",
  destroy-on-close="",
  width="45%"
)
  .grid.grid-flow-col.grid-rows-3
    .row-span-3.CENTER_R 
      img.image(:src="props.data.picture.large")
    .col-span-2 
      span {{ props.data.name.first }} {{ props.data.name.last }}
    .col-span-2
      span {{ props.data.gender }}
    .col-span-2
      span {{ props.data.email }}
</template>

<script setup lang="ts" name="TestDialog">
import { ref, watch } from "vue";
import type { PropType } from "vue";
const props = defineProps({
  visible: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  data: {
    type: Object as any,
    required: true,
  },
});
const dialogVisble = ref(false);
</script>
