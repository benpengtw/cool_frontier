<template lang="pug">
.container.FLEX_C
  .grid.grid-cols-10.gap-2.mb-10.CENTER_R
    el-card(
      v-for="item in memberItems",
      :key="item.phone",
      :body-style="{ padding: '0px' }",
      shadow="hover",
      @click="openModal(item)"
    )
      img.image(:src="item.picture.medium")
      div(style="padding: 14px")
        span {{ item.name.first }} {{ item.name.last }}
        .bottom
          time.time {{ item.gender }}

  .mt-20.CENTER_R
    el-pagination(
      layout="prev, pager, next",
      :page-size="30",
      :total="3030",
      :current-page="currentPage",
      @current-change="handleCurrentChange"
    )
</template>

<script setup lang="ts">
import { reactive, onMounted, computed, ref } from "vue";
import { getMemberList } from "@/api/members/member";
import { UserStore } from "@/store/userStore";
const currentPage = ref(0);
const userStore = UserStore();
const getUserName = computed(() => userStore.getUserName);
const memberItems = ref();
const state = reactive({
  loading: true,
  commissionRatio: 98.1,
  netIncome: 87.5,
  newMemberCounts: 35.2,
  todayBetting: 33.1,
  walletBalance: 27.5,
});
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
  getMemberList({ page: val, results: 30 }).then((response) => {
    // Object.assign(state, response.data.data);
    console.log("handleCurrentChange", response);
    memberItems.value = response.data.results;
  });
};
const openModal = (item: object) => {
  console.log("openModal", item);
};
onMounted(() => {
  getMemberList({ page: 1, results: 30 }).then((response) => {
    memberItems.value = response.data.results;
  });
});
</script>
<style lang="scss" scoped>
@media only screen and (max-height: 741px) {
  .growshrink {
    flex-shrink: 1;
    flex-grow: 0;
  }
}
</style>
