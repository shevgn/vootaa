<script setup lang="ts">
type AccordionItem = {
  title: {
    pool: string;
    totalTXs: number;
    last7Days: number;
    max: string;
  };
  content: string;
};

const sections: Ref<AccordionItem[], AccordionItem[]> = ref([
  {
    title: {
      pool: "$KDS - $VOOTAA",
      totalTXs: 112.341,
      last7Days: 1.12,
      max: "66@C19",
    },
    content: "Content for section 1",
  },
  {
    title: {
      pool: "$KDL - $VOOTAA",
      totalTXs: 15.523,
      last7Days: 153,
      max: "10@C18",
    },
    content: "Content for section 1",
  },
  {
    title: {
      pool: "$CRKK - $VOOTAA",
      totalTXs: 1.288,
      last7Days: 288,
      max: "21@C16",
    },
    content: "Content for section 3",
  },
  {
    title: {
      pool: "$KDAV - $VOOTAA",
      totalTXs: 1.1377,
      last7Days: 357,
      max: "19@C7",
    },
    content: "Content for section 4",
  },
  {
    title: {
      pool: "$USDV - $VOOTAA",
      totalTXs: 1.466,
      last7Days: 463,
      max: "25@C0",
    },
    content: "Content for section 5",
  },
]);

const activeSection = ref<number | null>(null);

const toggleSection = (index: number) => {
  activeSection.value = activeSection.value === index ? null : index;
};
</script>

<template>
  <div class="w-full text-custom-dark dark:text-custom-cyan lg:px-20">
    <div
      v-for="(section, index) in sections"
      :key="index"
      class="mb-2 rounded-md border border-custom-cyan"
    >
      <button
        class="flex w-full items-center justify-between bg-none p-4 text-left font-semibold focus:outline-none"
        @click="toggleSection(index)"
      >
        <span> {{ index + 1 }}: {{ section.title.pool }} </span>
        <span>
          {{ section.title.totalTXs }}
        </span>
        <span>
          {{ section.title.last7Days }}
        </span>
        <span>
          {{ section.title.max }}
        </span>
      </button>
      <div
        class="overflow-hidden transition-all duration-300"
        :style="{ maxHeight: activeSection === index ? '200px' : '0' }"
      >
        <div
          class="bg-gray-50 p-4 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
        >
          {{ section.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
