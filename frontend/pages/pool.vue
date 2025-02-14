<script setup lang="ts">
const chainStore = useChainStore();
const activeSection = ref<number | null>(null);

const toggleSection = (index: number) => {
  activeSection.value = activeSection.value === index ? null : index;
};

type AccordionItem = {
  pool: string;
  avgPrice: number;
  min: number;
  max: number;
  content: unknown;
};

const items: AccordionItem[] = [
  {
    pool: "$KDS - $VOOTAA",
    avgPrice: 0.1256,
    min: 0.1221,
    max: 0.1258,
    content: {},
  },
  {
    pool: "$KDL - $VOOTAA",
    avgPrice: 0.1133,
    min: 0.1155,
    max: 0.1122,
    content: {},
  },
];
</script>
<template>
  <div
    class="mx-auto flex h-full w-2/3 flex-col text-custom-dark dark:text-custom-cyan lg:w-full lg:px-4"
  >
    <div class="flex flex-row items-center justify-evenly">
      <span>POOLs</span>
      <span>Avg Price</span>
      <span>Max</span>
      <span>Min</span>
    </div>

    <div
      v-for="(item, index) in items"
      :key="index"
      class="mb-2 rounded-md border border-custom-dark dark:border-custom-cyan"
    >
      <button
        class="flex w-full items-center justify-between bg-none p-4 text-left font-semibold focus:outline-none"
        @click="toggleSection(index)"
      >
        <span>{{ index + 1 }}: </span>
        <span>{{ item.pool }}</span>
        <span>{{ item.avgPrice }}</span>
        <span>{{ item.max }}</span>
        <span>{{ item.min }}</span>

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
          class="flex flex-col rounded bg-gray-50 p-2 text-xs text-custom-cyan dark:bg-gray-800"
        >
          <PoolLiquidity :token1="{ name: 'KDS' }" />
          <div
            v-if="!chainStore.selectedNode"
            class="flex h-20 items-center justify-center text-red-500"
          >
            <UIcon name="ic:baseline-arrow-back" class="mr-4 h-8 w-8" />
            <p>Click The Chain ID Number In The Left ChainWeb Panel</p>
          </div>
          <PoolLiquidity
            v-else
            :chain="chainStore.selectedNode"
            :token1="{ value: 1022.333, name: 'KDS' }"
            :token2="{ value: 126.611 }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
