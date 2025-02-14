<script setup lang="ts">
defineProps<{
  chain?: number;
  token1: {
    value?: number;
    name: string;
  };
  token2?: {
    value: number;
  };
}>();
</script>
<template>
  <div class="flex items-center justify-around py-1">
    <span>
      Liquidity
      <sub v-if="!chain"> (Chain 0 - 19) </sub>
      <sub v-else>(Chain #{{ chain }})</sub>
    </span>
    <span v-if="!token1.value">12,345,566.77 ${{ token1.name }}</span>
    <span v-else>{{ token1.value }} {{ token1.name }}</span>
    <span>-</span>
    <span v-if="!token2">1,550,603.18 $VOOTAA</span>
    <span v-else>{{ token2.value }} VOOTAA</span>
  </div>
</template>
