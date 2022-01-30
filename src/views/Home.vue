<template lang="pug">
.container.FLEX_C
  .h-80.pt-10.mb-10.CENTER_R
    el-row
      el-col(
        v-for="(o, index) in 2",
        :key="o",
        :span="8",
        :offset="index > 0 ? 2 : 0"
      )
        el-card(:body-style="{ padding: '0px' }")
          img.image(
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          )
          div(style="padding: 14px")
            span Yummy hamburger
            .bottom
              time.time {{ currentDate }}
              el-button.button(type="text") Operating
  .mt-20.CENTER_R
    el-pagination(
      layout="prev, pager, next",
      :page-size="30",
      :total="3030",
      background
    )
</template>

<script setup lang="ts">
import { reactive, onMounted, computed, ref } from "vue";
import { getMemberList } from "@/api/members/member";
import top1 from "@/assets/Frame_4.svg";
import { UserStore } from "@/store/userStore";

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
const currentDate = ref(new Date());
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
