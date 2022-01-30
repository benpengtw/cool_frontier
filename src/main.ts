import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
import router from "./router";

import "./assets/scss/main.scss";
import { createPinia } from "pinia";

// 全局引入样式
const app = createApp(App); // 创建实例

app.use(ElementPlus);

app.use(router);
app.use(createPinia());
app.mount("#app");
