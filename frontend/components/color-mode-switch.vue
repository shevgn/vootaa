<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.value = colorMode.value === "light" ? "dark" : "light";
};

const icons: Record<string, string> = {
  dark: "ic:outline-dark-mode",
  light: "ic:baseline-wb-sunny",
} as const;

function getIcon<K extends keyof typeof icons>(name: K): (typeof icons)[K] {
  return icons[name];
}
</script>

<template>
  <button @click="toggleColorMode" class="flex items-center group">
    <UIcon :name="getIcon(colorMode.value)"
      class="w-6 h-6 group-hover:bg-custom-green bg-custom-dark dark:bg-custom-cyan" />
  </button>
</template>
