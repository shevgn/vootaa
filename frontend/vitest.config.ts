import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
    test: {
        environment: "happy-dom", // або 'jsdom' залежно від ваших уподобань
    },
});
