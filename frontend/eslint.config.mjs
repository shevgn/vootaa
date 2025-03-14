// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default withNuxt({
    plugins: {
        prettier: eslintPluginPrettier,
    },
    rules: {
        "prettier/prettier": "error",
        indent: "off",
        "vue/html-self-closing": "off",
    },
});
