<template lang="pug">
.container.FLEX_C
  .flex.flex-row.items-center.justify-end.m-4
    el-button-group
      el-button(type="primary", @click="setShowCard") Card
      el-button(type="primary", @click="setShowList") List

  .grid.grid-cols-10.gap-2.mb-10.CENTER_R(v-if="showCard")
    el-card(
      v-for="item in memberItems",
      :key="item.phone",
      :body-style="{ padding: '0px' }",
      shadow="hover",
      @click="openModal(item)"
    )
      img.image(:src="item.picture.medium")
      .p-4
        span {{ item.name.first }} {{ item.name.last }}
        .grid
          span {{ item.gender }}
  .grid.grid-cols-1.gap-2.mb-10.CENTER_R(v-if="showList")
    el-card(
      v-for="item in memberItems",
      :key="item.phone",
      :body-style="{ padding: '0px' }",
      shadow="hover",
      @click="openModal(item)"
    )
      .grid.grid-flow-col.grid-rows-3
        .row-span-3.CENTER_R 
          img.image(:src="item.picture.large")
        .col-span-2 
          span {{ item.name.first }} {{ item.name.last }}
        .col-span-2
          span {{ item.gender }}
        .col-span-2
          span {{ item.email }}

  .mt-20.CENTER_R
    el-pagination(
      layout="prev, pager, next",
      :page-size="30",
      :total="3030",
      :current-page="currentPage",
      @current-change="handleCurrentChange"
    )
TestDialog(:data="modelData", v-model="showDialog")
</template>

<script setup lang="ts">
import { reactive, onMounted, computed, ref } from "vue";
import { getMemberList } from "@/api/members/member";
import TestDialog from "@/components/TestDialog/index.vue";
const currentPage = ref(0);

const showCard = ref(true);
const showList = ref(false);
const showDialog = ref(false);
const memberItems = ref();
const modelData = reactive({
  name: {},
  phone: "",
  picture: {},
  gender: "",
  email: "",
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
  showDialog.value = true;
  console.log("openModal", item);
  Object.assign(modelData, item);
};
const setShowCard = () => {
  showCard.value = true;
  showList.value = false;
};
const setShowList = (item: object) => {
  showCard.value = false;
  showList.value = true;
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
