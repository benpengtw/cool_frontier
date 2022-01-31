import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { minifyHtml, injectHtml } from "vite-plugin-html";
import dayjs from "dayjs";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [
      vue(),
      minifyHtml(),
      injectHtml({
        injectData: {
          title: process.env.VITE_TITLE,
          ver: pkg.version,
          buildTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        },
      }),

      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    //https://blog.csdn.net/xingorg/article/details/120537203
    // 正機不可用'./'
    base: "/",
    define: {
      "process.env": {},
    },
    optimizeDeps: {
      include: ["element-plus"],
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  });
