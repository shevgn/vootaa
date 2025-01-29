<script setup lang="ts">

type AccordionItem = {
  label: string | string[];
}

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
    class="mx-auto h-full w-2/3 text-custom-dark dark:text-custom-cyan lg:w-full lg:px-10"
  >
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
          <span> {{ index + 1 }}: {{ item.label }} </span>
        </template>
        <template v-else>
          <span> {{ index + 1 }}: {{ item.label[0] }} </span>
          <span v-for="(labelPart, index) in item.label.slice(1)" :key="index">
            {{ labelPart }}
          </span>
        </template>
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
