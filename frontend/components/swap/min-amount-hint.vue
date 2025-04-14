<script setup lang="ts">
defineProps<{
  minAmount: number;
}>();
const minHintShown = ref(false);

const showMinHint = (): void => {
  minHintShown.value = !minHintShown.value;
};
</script>
<template>
  <button
    type="button"
    class="absolute left-1 top-0 flex size-5 items-center justify-center rounded-full bg-custom-dark dark:bg-custom-cyan"
    @click="showMinHint"
  >
    <UIcon
      name="ic:baseline-question-mark"
      class="h-3 w-3 text-custom-cyan dark:bg-custom-dark"
    />
  </button>
  <p
    v-if="minHintShown"
    class="absolute -top-1 left-8 text-xs font-medium text-red-500"
  >
    Limit the minimum amout to {{ minAmount }}
  </p>
</template>
