<script setup lang="ts">
const VueApexCharts = defineAsyncComponent(() => import("vue3-apexcharts"));

type AccordionItem = {
  label: string[];
};

const accordionItems: Ref<AccordionItem[], AccordionItem[]> = ref([
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
  <Accordion :items="accordionItems">
    <ClientOnly>
      <VueApexCharts height="300" :options="options" :series="series" />
    </ClientOnly>
  </Accordion>
</template>

<style>
.apexcharts-tooltip-series-group > span.apexcharts-tooltip-marker {
  width: fit-content !important;
}
</style>
