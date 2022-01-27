import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Blank from "@/views/Blank.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    //捕获所有路由
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// router.beforeEach((to, from, next) => {
//   if (to.name !== "Login" && !window.localStorage.getItem("USER_INFO")) {
//     next({ name: "Login" });
//   } else {
//     next();
//   }
//   // Scroll to window top
//   // window.scrollTo(0, 0);
// });
export default router;
