<script setup lang="ts">
import type { Token } from "~/types/tokens";

defineProps<{
  title?: string;
  chain?: number;
  token1: {
    value?: number;
    name: Token;
  };
  token2?: {
    value: number;
  };
}>();
</script>
<template>
  <div class="flex items-center justify-around py-1">
    <span>
      {{ title ? title : "Liquidity" }}
      <sub v-if="chain === undefined"> (Chain 0 - 19) </sub>
      <sub v-else>
        (Chain <span class="text-red-600">#{{ chain }}</span
        >)
      </sub>
    </span>
    <span v-if="token1.value === undefined">
      12,345,566.77 ${{ token1.name }}
    </span>
    <span v-else>{{ token1.value.toLocaleString() }} ${{ token1.name }}</span>
    <span>-</span>
    <span v-if="!token2">1,550,603.18 $VOOTAA</span>
    <span v-else>{{ token2.value.toLocaleString() }} $VOOTAA</span>
  </div>
</template>
