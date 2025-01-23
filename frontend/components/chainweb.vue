<script setup lang="ts"></script>

<template>
  <div
    class="relative hidden h-full w-full max-w-screen-sm rounded-md border border-custom-dark p-4 dark:border-custom-cyan lg:block"
  >
    <div
      class="absolute left-4 right-4 top-4 mb-4 flex flex-row justify-between text-lg font-semibold"
    >
      <span class="text-custom-dark dark:text-custom-cyan">CHAINWEB</span>
      <span class="text-custom-dark dark:text-custom-cyan">
        CHAIN ID:
        <span class="text-red-400">
          {{ "None" }}
        </span>
      </span>
    </div>
    <SvgChainweb />
  </div>
</template>
