<script setup lang="ts"></script>

<template>
  <div class="border dark:border-custom-cyan border-custom-dark rounded-md p-4 w-full h-full">
    <div class="flex justify-between text-lg font-semibold mb-4">
      <span class="dark:text-custom-cyan text-custom-dark">CHAINWEB</span>
      <span class="dark:text-custom-cyan text-custom-dark">
        CHAIN ID:
        <span class="text-red-400">
          {{ "None" }}
        </span>
      </span>
    </div>
    <SvgChainweb />
  </div>
</template>
