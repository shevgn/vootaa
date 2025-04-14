<script setup lang="ts">
defineProps<{
  originalAmount: number;
  amountToReceive: number;
  tokens: {
    tokenToSell: string;
    tokenToBuy: string;
  };
}>();

type FormattedAmount = {
  wholePart: string;
  pennyPart: string;
};

const formatResultAmount = (amount: number): FormattedAmount => {
  const splitted = amount.toFixed(4).toString().split(".");

  return {
    wholePart: splitted[0],
    pennyPart: splitted[1],
  };
};
</script>

<template>
  <div class="flex w-full items-center justify-evenly p-2">
    <div>
      <span class="text-3xl">
        {{ formatResultAmount(originalAmount).wholePart }}.
      </span>
      <span class="pr-4">
        {{ formatResultAmount(originalAmount).pennyPart }}
      </span>
      <span>${{ tokens.tokenToSell }}</span>
    </div>
    <UIcon
      name="ic:baseline-keyboard-double-arrow-right"
      class="h-8 w-8 bg-custom-dark dark:bg-custom-cyan"
    />
    <div>
      <span class="text-3xl">
        {{ formatResultAmount(amountToReceive).wholePart }}.
      </span>
      <span class="pr-4">
        {{ formatResultAmount(amountToReceive).pennyPart }}
      </span>
      <span>${{ tokens.tokenToBuy }}</span>
    </div>
  </div>
</template>
