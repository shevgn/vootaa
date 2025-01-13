<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

const icons: Record<string, string> = {
  dark: "ic:outline-dark-mode",
  light: "ic:baseline-wb-sunny",
} as const;

console.log(colorMode.preference);
</script>

<template>
  <button @click="toggleColorMode">
    <UIcon :name="icons[colorMode.preference]" class="w-6 h-6" />
  </button>
</template>
