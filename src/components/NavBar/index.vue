<template>
  <van-nav-bar :title="props.name" left-text="" left-arrow class="p-4 bgColor">
    <template #left>
      <i class="text-2xl text-primary my-icon my-icon-back" @click="goBack"></i>
    </template>
    <template #title>
      <h5 class="text-white pingfang">{{ props.name }}</h5>
    </template>
  </van-nav-bar>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NavBar",
  props: {
    name: {
      type: String,
    },
    back: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    // const props = defineProps<Props>();

    const router = useRouter();
    const goBack = () => {
      // console.log("adsads", props.back);
      if (!props.back) {
        router.push({ path: "/home" });
      } else if (props.back && props.id) {
        router.push({ path: props.back, query: { id: props.id } });
      } else {
        router.push({ path: props.back });
      }
    };
    return {
      goBack,
      props,
    };
  },
});
</script>
<style scoped>
.van-cell::after,
[class*="van-hairline"]::after {
  display: none;
}

.bgColor {
  background: linear-gradient(101.58deg, #333333 3.4%, #1a1a1a 97.37%);
}
</style>
