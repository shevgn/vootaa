<script setup lang="ts">
const maxHintShown = ref(false);

const showMaxHint = (): void => {
  maxHintShown.value = !maxHintShown.value;
};
</script>

<template>
  <button
    type="button"
    class="absolute right-1 top-0 flex size-5 items-center justify-center rounded-full bg-custom-dark dark:bg-custom-cyan"
    @click="showMaxHint"
  >
    <UIcon
      name="ic:baseline-question-mark"
      class="h-3 w-3 text-custom-cyan dark:bg-custom-dark"
    />
  </button>
  <p
    v-if="maxHintShown"
    class="absolute -top-1 right-8 text-xs font-medium text-red-500"
  >
    Limit to 1% of pool size
  </p>
</template>
