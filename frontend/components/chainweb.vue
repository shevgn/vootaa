<script setup lang="ts"></script>

<template>
  <div
    class="h-full w-full rounded-md border border-custom-dark p-4 dark:border-custom-cyan"
  >
    <div class="mb-4 flex justify-between text-lg font-semibold">
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
