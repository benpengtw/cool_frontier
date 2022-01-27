<template>
  <div class="flex flex-shrink-0 h-[50px]">
    <van-tabbar
      v-model="currentID"
      active-color="#cda269"
      inactive-color="#666"
      safe-area-inset-bottom
    >
      <van-tabbar-item :icon="homeIcon" class="bg-[#2f2f31]" to="/home">
        <p :class="homeText">{{ $t("c_tabbar_1") }}</p>
      </van-tabbar-item>
      <van-tabbar-item :icon="memberIcon" class="bg-[#2f2f31]" to="/member">
        <p :class="memberText">{{ $t("c_tabbar_2") }}</p>
      </van-tabbar-item>
      <van-tabbar-item :icon="financeIcon" class="bg-[#2f2f31]" to="/finance">
        <p :class="financeText">{{ $t("c_tabbar_3") }}</p>
      </van-tabbar-item>
      <van-tabbar-item :icon="recordIcon" class="bg-[#2f2f31]" to="/record">
        <p :class="recordText">{{ $t("c_tabbar_4") }}</p>
      </van-tabbar-item>
      <van-tabbar-item :icon="moreIcon" class="bg-[#2f2f31]" to="/more">
        <p :class="moreText">{{ $t("c_tabbar_5") }}</p>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { computed, ref } from "vue";
import iconHome from "@/assets/img/home.svg";
import iconHomeInactive from "@/assets/img/home_inactive.svg";
import iconMember from "@/assets/img/member.svg";
import iconMemberInactive from "@/assets/img/member_inactive.svg";
import iconRecord from "@/assets/img/record.svg";
import iconRecordInactive from "@/assets/img/record_inactive.svg";
import iconShare from "@/assets/img/share.svg";
import iconShareInactive from "@/assets/img/share_inactive.svg";
import iconMore from "@/assets/img/more.svg";
import iconMoreInactive from "@/assets/img/more_inactive.svg";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const { t } = useI18n();
    const currentID = ref(0);

    const homeIcon = computed(() => {
      return currentID.value === 0 ? iconHome : iconHomeInactive;
    });
    const memberIcon = computed(() => {
      return currentID.value === 1 ? iconMember : iconMemberInactive;
    });
    const financeIcon = computed(() => {
      return currentID.value === 2 ? iconRecord : iconRecordInactive;
    });
    const recordIcon = computed(() => {
      return currentID.value === 3 ? iconShare : iconShareInactive;
    });
    const moreIcon = computed(() => {
      return currentID.value === 4 ? iconMore : iconMoreInactive;
    });

    const homeText = computed(() => {
      return currentID.value === 0 ? "text-[#967140]" : "text-[#666]";
    });
    const memberText = computed(() => {
      return currentID.value === 1 ? "text-[#967140]" : "text-[#666]";
    });
    const financeText = computed(() => {
      return currentID.value === 2 ? "text-[#967140]" : "text-[#666]";
    });
    const recordText = computed(() => {
      return currentID.value === 3 ? "text-[#967140]" : "text-[#666]";
    });
    const moreText = computed(() => {
      return currentID.value === 4 ? "text-[#967140]" : "text-[#666]";
    });

    return {
      currentID,
      homeIcon,
      memberIcon,
      financeIcon,
      recordIcon,
      moreIcon,
      homeText,
      memberText,
      financeText,
      recordText,
      moreText,
      t,
    };
  },
};
</script>
<style scoped>
.van-cell::after,
[class*="van-hairline"]::after {
  display: none;
}
</style>
