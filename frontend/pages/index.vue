<script setup lang="ts">
const VueApexCharts = defineAsyncComponent(() => import("vue3-apexcharts"));

const activeSection = ref<number | null>(null);

const toggleSection = (index: number) => {
  activeSection.value = activeSection.value === index ? null : index;
};

type AccordionItem = {
  label: string[];
};

const items = ref<AccordionItem[]>([
  {
    label: ["$KDS - $VOOTAA", "112.341", "1.12", "66@C19"],
  },
  {
    label: ["$KDL - $VOOTAA", "15.523", "153", "10@C18"],
  },
  {
    label: ["CRKK - $VOOTAA", "1.288", "288", "21@C16"],
  },
  {
    label: ["KDAV - $VOOTAA", "1.1377", "357", "19@C7"],
  },
  {
    label: ["$USDV - $VOOTAA", "1.466", "463", "25@C0"],
  },
]);

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
          <ClientOnly>
            <VueApexCharts height="300" :options="options" :series="series" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.apexcharts-tooltip-series-group > span.apexcharts-tooltip-marker {
  width: fit-content !important;
}
</style>
