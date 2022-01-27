import { createApp } from "vue";
import App from "./App.vue";

import { ElTable } from "element-plus";
import router from "./router";

import "./assets/scss/main.scss";
import { createPinia } from "pinia";

// 全局引入样式
const app = createApp(App); // 创建实例

app.use(ElTable);

app.use(router);
app.use(createPinia());
app.mount("#app");
