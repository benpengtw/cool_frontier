module.exports = {
  mode: "jit",
  content: ["./src/**/*.{vue,ts,tsx}"],
  prefix: "",
  important: false,
  separator: ":",
  theme: {
    extend: {
      colors: {
        primary: "#967140",
        primaryLight: "#CDA269",
        subWhite: "#8b8b8b",
        golden: "#CDA269",
        red: "#FF4F42",
        darkOpacity: "rgba(21, 21, 21, 0.62);",
      },
      minHeight: {
        "50vh": "50vh",
      },
      backgroundImage: {
        btn: "url('src/assets/pattern_btn_bg.svg')",
      },
    },
  },
  corePlugins: {},
  // tailwindcss 多行文本自动省略
  // ex: <p class="line-clamp-3">
  plugins: [require("@tailwindcss/line-clamp")],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
