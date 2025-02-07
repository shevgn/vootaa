// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@formkit/auto-animate/nuxt",
  ],
  alias: {
    "#tailwind-config": resolve("./tailwind.config"),
  },
  colorMode: {
    classSuffix: "",
  },
});
