<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
type AccordionItem = {
  title: {
    pool: string;
    totalTXs: number;
    last7Days: number;
    max: string;
  };
};

const sections: Ref<AccordionItem[], AccordionItem[]> = ref([
  {
    title: {
      pool: "$KDS - $VOOTAA",
      totalTXs: 112.341,
      last7Days: 1.12,
      max: "66@C19",
    },
  },
  {
    title: {
      pool: "$KDL - $VOOTAA",
      totalTXs: 15.523,
      last7Days: 153,
      max: "10@C18",
    },
  },
  {
    title: {
      pool: "$CRKK - $VOOTAA",
      totalTXs: 1.288,
      last7Days: 288,
      max: "21@C16",
    },
  },
  {
    title: {
      pool: "$KDAV - $VOOTAA",
      totalTXs: 1.1377,
      last7Days: 357,
      max: "19@C7",
    },
  },
  {
    title: {
      pool: "$USDV - $VOOTAA",
      totalTXs: 1.466,
      last7Days: 463,
      max: "25@C0",
    },
  },
]);

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

const options = {
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      tools: {
        download: false,
      },
    },
  },
  title: {
    text: "cyan",
    align: "left",
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
  },
  annotations: {},
  legend: {
    labels: {
      colors: "#68FCF1",
      useSeriesColors: false,
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
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};
</script>

<template>
  <div
    class="mx-auto h-full w-2/3 text-custom-dark dark:text-custom-cyan lg:w-full lg:px-10"
  >
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
        :style="{ maxHeight: activeSection === index ? '350px' : '0' }"
      >
        <div
          class="bg-gray-50 p-2 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
        >
          <ClientOnly>
            <VueApexCharts height="300" :options="options" :series="series" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
