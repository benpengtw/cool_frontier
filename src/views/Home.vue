<template lang="pug">
.bg-gray-500.h-screen.pt-10
  .flex.max-w-sm.mx-auto.p-6.rounded-lg.bg-white
    .flex-shrink-0
      img.h-12.w-12(src="../assets/logo.png")
    .ml-6
      h4.text-xl.text-gray-900.leading-tight.font-serif ChitChat
      p.text-base.text-gray-600.leading-normal You have a message!
</template>

<script lang="ts">
import { reactive, onMounted, computed } from "vue";
import { getMemberList } from "@/api/members/member";
import top1 from "@/assets/Frame_4.svg";
import { UserStore } from "@/store/userStore";

export default {
  setup() {
    const userStore = UserStore();
    const getUserName = computed(() => userStore.getUserName);
    const state = reactive({
      loading: true,
      top1: top1,
      commissionRatio: 98.1,
      netIncome: 87.5,
      newMemberCounts: 35.2,
      todayBetting: 33.1,
      walletBalance: 27.5,
    });

    onMounted(() => {
      getMemberList({ page: 3, results: 10 }).then((response) => {
        Object.assign(state, response.data.data);
        console.log(response);
      });
    });
    return {
      getUserName,
      state,
    };
  },
};
</script>
<style lang="scss" scoped>
.growshrink {
  flex-grow: 1;
}
.homeHaeader {
  background-image: url("@/assets/Group_51.png");
  background-repeat: repeat-x;
}
.cardBg2 {
  background-image: url("@/assets/cardBg2.svg"),
    linear-gradient(155.07deg, #343434 5.26%, #181818 84.13%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}
.cardBg1 {
  background-image: url("@/assets/cardBg1.svg"),
    linear-gradient(302.01deg, #cda269 32.92%, #ffd49a 97.96%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}
@media only screen and (max-height: 741px) {
  .growshrink {
    flex-shrink: 1;
    flex-grow: 0;
  }
}
</style>
