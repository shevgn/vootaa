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

const series = ref([
  {
    name: "KDS",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "VOOTAA",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
]);

const options = computed(() => {
  const isDark = useColorMode().value === "dark";
  const textColor = isDark ? "#68FCF1" : "#333";

  return {
    chart: {
      type: "area",
      toolbar: {
        tools: {
          download: false,
        },
      },
      foreColor: textColor,
    },
    noData: {
      text: "Loading...",
    },
    title: {
      text: "Price Overview",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
    },
    legend: {
      labels: {
        useSeriesColors: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      tooltip: {
        enabled: false,
      },
    },
    tooltip: {
      theme: isDark ? "dark" : "light",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
});
</script>

<template>
  <div class="mx-auto h-full w-2/3 text-custom-dark dark:text-custom-cyan lg:w-full lg:px-4">
    <div v-for="(item, index) in items" :key="index"
      class="mb-2 rounded-md border border-custom-dark dark:border-custom-cyan">
      <button class="flex w-full items-center justify-between bg-none p-4 text-left font-semibold focus:outline-none"
        @click="toggleSection(index)">
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

      <div class="overflow-hidden transition-all duration-300"
        :style="{ maxHeight: activeSection === index ? '350px' : '0' }">
        <div class="rounded bg-gray-50 p-2 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
