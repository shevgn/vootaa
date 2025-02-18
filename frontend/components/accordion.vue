<script setup lang="ts">
type AccordionItem = {
  label: string | string[];
};

defineProps<{
  items: AccordionItem[];
}>();

const activeSection = ref<number | null>(null);

const toggleSection = (index: number) => {
  activeSection.value = activeSection.value === index ? null : index;
};
</script>

<template>
  <div
    class="mx-auto h-full w-2/3 text-custom-dark dark:text-custom-cyan lg:w-full lg:px-4"
  >
    <table class="w-full">
      <thead>
        <tr>
          <th class="w-2/5">POOLs</th>
          <th class="w-1/5">Total TXs</th>
          <th class="w-1/5">Last 7 Days</th>
          <th class="w-1/12">Max</th>
          <th class="" />
        </tr>
      </thead>
    </table>

    <div
      v-for="(item, index) in items"
      :key="index"
      class="mb-2 rounded-md border border-custom-dark dark:border-custom-cyan"
    >
      <button
        class="flex w-full items-center justify-between bg-none p-4 text-left font-semibold focus:outline-none"
        @click="toggleSection(index)"
      >
        <template v-if="typeof item.label === 'string'">
          <span>{{ index + 1 }}: </span>
          <span>{{ item.label }}</span>
        </template>
        <template v-else>
          <span>{{ index + 1 }}: </span>
          <span>{{ item.label[0] }}</span>
          <span v-for="(labelPart, index) in item.label.slice(1)" :key="index">
            {{ labelPart }}
          </span>
        </template>
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
          class="rounded bg-gray-50 p-2 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
