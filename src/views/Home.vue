<template>
  <div
    class="container FLEX_C bg-gradient-to-b from-[#353535] via-black to-black"
  >
    <div class="growshrink pt-8 mb-2 text-center h-[200px] homeHaeader">
      <div class="CENTER_C">
        <img class="mb-8" :src="state.top1" />
        <div class="text-primary">{{ "home_1" }}</div>
        <h4 class="text-white">{{ getUserName }}</h4>
      </div>
    </div>

    <div class="grid grid-cols-5 gap-4 p-4 growshrink">
      <div class="col-span-3 rounded-md shrink goldGradient cardBg1">
        <div class="h-full p-4 CENTER_C">
          <div class="text-xs md:text-sm text-primary">◆ {{ "home_2" }} ◆</div>
          <h4 class="w-full text-center text-white truncate bodoni">
            {{ state.netIncome }}
          </h4>
          <van-divider class="w-full my-1 border-white" />
          <div class="text-xs md:text-sm text-primary">
            S {{ "home_3" }},002
          </div>
        </div>
      </div>

      <div class="col-span-2 border rounded-md border-golden cardBg2">
        <div class="items-center justify-center h-full CENTER_C">
          <div class="text-xs md:text-sm text-primary">◆ {{ "home_4" }} ◆</div>
          <h3 class="text-white bodoni">
            {{ state.commissionRatio }}
            <span class="text-sm">%</span>
          </h3>
        </div>
      </div>
    </div>

    <div class="container pl-4 pr-4 growshrink FLEX_C">
      <div class="grow">
        <h5 class="text-primary">◆ {{ "home_5" }}</h5>
      </div>
      <div class="border-b border-opacity-50 border-dashed grow">
        <router-link to="newRegistrationList">
          <div class="flex justify-between py-2">
            <div class="flex items-center ml-4 text-primary">
              <span
                class="text-primaryLight text-[1.5rem] my-icon my-icon-register mr-2"
              ></span>
              <span class="text-xs text-primary">{{ "home_6" }}</span>
            </div>
            <div class="flex items-center">
              {{ state.newMemberCounts }}
              <van-icon class="text-subWhite" name="arrow" />
            </div>
          </div>
        </router-link>
      </div>
      <div class="mt-2 border-b border-opacity-50 border-dashed grow">
        <router-link to="todayMember">
          <div class="flex justify-between py-2">
            <div class="flex items-center ml-4 text-primary">
              <span
                class="text-primaryLight text-[1.5rem] my-icon my-icon-money mr-2"
              ></span>
              <span class="text-xs text-primary">{{ "home_7" }}</span>
            </div>
            <div class="flex items-center">
              {{ state.todayBetting }}
              <van-icon class="text-subWhite" name="arrow" />
            </div>
          </div>
        </router-link>
      </div>
      <div class="mt-2 border-b border-opacity-50 border-dashed grow">
        <router-link to="wallet">
          <div class="flex justify-between py-2">
            <div class="flex items-center ml-4 text-primary">
              <span
                class="text-primaryLight text-[1.5rem] van-icon van-icon-paid mr-2"
              ></span>
              <span class="text-xs text-primary">{{ "home_8" }}</span>
            </div>
            <div class="flex items-center">
              {{ state.walletBalance }}
              <van-icon class="text-subWhite" name="arrow" />
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4 p-4 growshrink">
      <router-link to="linkPage">
        <div
          class="col-span-1 py-4 rounded-md cursor-pointer darkGradient CENTER_C"
        >
          <p
            class="text-[1.5rem] text-primaryLight my-icon my-icon-link my-2"
          ></p>
          <p class="text-xs text-primary">{{ "home_9" }}</p>
        </div>
      </router-link>
      <router-link to="subProxyPage">
        <div
          class="col-span-1 py-4 rounded-md cursor-pointer darkGradient CENTER_C"
        >
          <p
            class="text-[1.5rem] text-primaryLight my-icon my-icon-organization my-2"
          ></p>
          <p class="text-xs text-primary">{{ "home_10" }}</p>
        </div>
      </router-link>
      <router-link to="promotionPage">
        <div
          class="col-span-1 py-4 rounded-md cursor-pointer darkGradient CENTER_C"
        >
          <p
            class="text-[1.5rem] text-primaryLight my-icon my-icon-calendar my-2"
          ></p>
          <p class="text-xs text-primary">{{ "home_11" }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, onMounted, computed } from "vue";
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
      // getUser().then((response) => {
      //   console.log(response.data.data);
      //   Object.assign(state, response.data.data);
      // });
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
