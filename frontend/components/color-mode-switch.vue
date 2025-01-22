<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "light" ? "dark" : "light";
};
</script>

<template>
  <button class="group flex items-center" @click="toggleColorMode">
    <svg
      v-if="colorMode.value == 'dark'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 fill-custom-cyan group-hover:fill-custom-green"
      viewBox="0 0 24 24"
    >
      <path
        d="M9.37 5.51A7.4 7.4 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.01 7.01 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1"
      />
    </svg>
    <svg
      v-else-if="colorMode.value == 'light'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 fill-custom-dark group-hover:fill-custom-green"
      viewBox="0 0 24 24"
    >
      <path
        d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91l-1.41-1.41l-1.79 1.79l1.41 1.41zm-3.21 13.7l1.79 1.8l1.41-1.41l-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91l1.41 1.41l1.79-1.8l-1.41-1.41z"
      />
    </svg>
  </button>
</template>
