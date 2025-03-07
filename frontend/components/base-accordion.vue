<script setup lang="ts">
const activeSection = ref<number | null>(null);

const toggleSection = (index: number) => {
  activeSection.value = activeSection.value === index ? null : index;
};

defineProps<{
  items: Record<string, unknown>[];
  fieldStyles?: Record<string, string>;
}>();

const omitKeys = (object: object, keys: string[]): object => {
  return Object.fromEntries(
    Object.entries(object).filter(([key]) => !keys.includes(key))
  );
};
</script>

<template>
  <div
    class="mx-auto flex h-full w-2/3 flex-col text-custom-dark dark:text-custom-cyan lg:w-full lg:px-4"
  >
    <slot name="heading" />

    <div
      v-for="(item, index) in items"
      :key="index"
      class="mb-2 rounded-md border border-custom-dark dark:border-custom-cyan"
    >
      <button
        class="flex w-full items-center justify-between gap-2 bg-none p-4 text-left font-semibold focus:outline-none"
        @click="toggleSection(index)"
      >
        <span>{{ index + 1 }}:</span>
        <span
          v-for="([key, value], valueIndex) in Object.entries(
            omitKeys(item, ['token'])
          )"
          :key="valueIndex"
          class="text-center"
          :class="fieldStyles?.[key] || 'whitespace-nowrap'"
        >
          {{ value }}
        </span>

        <UIcon
          name="ic:baseline-arrow-forward"
          class="h-4 w-4 transition-all"
          :class="activeSection === index ? 'rotate-90' : ''"
        />
      </button>

      <div
        class="overflow-hidden transition-all duration-300"
        :style="{ maxHeight: activeSection === index ? '350px' : '0' }"
      >
        <div
          class="flex flex-col rounded bg-gray-50 p-2 text-sm text-custom-dark dark:bg-gray-800 dark:text-custom-cyan"
        >
          <slot :name="`content-${index}`" />
        </div>
      </div>
    </div>
  </div>
</template>
