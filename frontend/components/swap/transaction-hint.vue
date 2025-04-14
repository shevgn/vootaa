<script setup lang="ts">
const transactionHintShown = ref(false);

const showTransactionHint = (): void => {
  transactionHintShown.value = !transactionHintShown.value;
};
</script>

<template>
  <div class="mt-4 flex h-full w-full flex-row justify-end space-x-4">
    <p
      v-if="transactionHintShown"
      class="text-right text-xs font-medium text-custom-cyan"
    >
      The default transaction expiration time is 10 minutes,
      <br />
      the default transaction time is 20 minutes,
      <br />
      and the default price slippage is 0.75%.
    </p>
    <button
      type="button"
      class="flex size-5 items-center justify-center rounded-full bg-custom-dark dark:bg-custom-cyan"
      @click="showTransactionHint"
    >
      <UIcon
        name="ic:baseline-question-mark"
        class="h-3 w-3 text-custom-cyan dark:bg-custom-dark"
      />
    </button>
  </div>
</template>
