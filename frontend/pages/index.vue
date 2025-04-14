<script setup lang="ts">
import type { Token } from "~/types/tokens";

const VueApexCharts = defineAsyncComponent(() => import("vue3-apexcharts"));

type AccordionItem = {
  token: Token;
  pool: string;
  totalTxs: number;
  last7Days: number;
  max: string;
};

const items = ref<AccordionItem[]>([
  {
    token: "KDS",
    pool: "$KDS - $VOOTAA",
    totalTxs: 112.341,
    last7Days: 1.12,
    max: "66@C19",
  },
  {
    token: "KDL",
    pool: "$KDL - $VOOTAA",
    totalTxs: 15.523,
    last7Days: 153,
    max: "10@C18",
  },
  {
    token: "CRKK",
    pool: "$CRKK - $VOOTAA",
    totalTxs: 1.288,
    last7Days: 288,
    max: "21@C16",
  },
  {
    token: "KDAV",
    pool: "$KDAV - $VOOTAA",
    totalTxs: 1.1377,
    last7Days: 357,
    max: "19@C7",
  },
  {
    token: "USDV",
    pool: "$USDV - $VOOTAA",
    totalTxs: 1.466,
    last7Days: 463,
    max: "25@C0",
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
  <BaseAccordion :items="items">
    <template #heading>
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
    </template>
    <template #content-0>
      <ClientOnly>
        <VueApexCharts height="300" :options="options" :series="series" />
      </ClientOnly>
    </template>
    <template #content-1>
      <ClientOnly>
        <VueApexCharts height="300" :options="options" :series="series" />
      </ClientOnly>
    </template>
    <template #content-2>
      <ClientOnly>
        <VueApexCharts height="300" :options="options" :series="series" />
      </ClientOnly>
    </template>
    <template #content-3>
      <ClientOnly>
        <VueApexCharts height="300" :options="options" :series="series" />
      </ClientOnly>
    </template>
    <template #content-4>
      <ClientOnly>
        <VueApexCharts height="300" :options="options" :series="series" />
      </ClientOnly>
    </template>
  </BaseAccordion>
</template>

<style>
.apexcharts-tooltip-series-group > span.apexcharts-tooltip-marker {
  width: fit-content !important;
}
</style>
