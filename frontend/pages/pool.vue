<script setup lang="ts">
const chainStore = useChainStore();
const activeSection = ref<number | null>(null);

const toggleSection = (index: number) => {
  activeSection.value = activeSection.value === index ? null : index;
};

type AccordionItem = {
  token: string;
  pool: string;
  avgPrice: number;
  min: number;
  max: number;
};

const items: AccordionItem[] = [
  {
    token: "KDS",
    pool: "$KDS - $VOOTAA",
    avgPrice: 0.1256,
    min: 0.1221,
    max: 0.1258,
  },
  {
    token: "KDL",
    pool: "$KDL - $VOOTAA",
    avgPrice: 0.1133,
    min: 0.1155,
    max: 0.1122,
  },
  {
    token: "CRKK",
    pool: "$CRKK - $VOOTAA",
    avgPrice: 0.1511,
    min: 0.1566,
    max: 0.1311,
  },
  {
    token: "KDAV",
    pool: "$KDAV - $VOOTAA",
    avgPrice: 1.1277,
    min: 0.1298,
    max: 0.1225,
  },
  {
    token: "USDV",
    pool: "$KDAV - $VOOTAA",
    avgPrice: 1.1056,
    min: 1.1158,
    max: 1.1011,
  },
];
</script>
<template>
  <div
    class="mx-auto flex h-full w-2/3 flex-col text-custom-dark dark:text-custom-cyan lg:w-full lg:px-4"
  >
    <table class="w-full">
      <thead>
        <tr>
          <th class="w-2/5">POOLs</th>
          <th class="w-1/6">Avg Price</th>
          <th class="w-1/6">Max</th>
          <th class="w-1/6">Min</th>
          <th />
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
          class="flex flex-col rounded bg-gray-50 p-2 text-xs text-custom-dark dark:bg-gray-800 dark:text-custom-cyan"
        >
          <PoolLiquidity :token1="{ name: `${item.token}` }" />
          <SelectChainHint v-if="chainStore.selectedNode === null" />
          <template v-else>
            <PoolLiquidity
              :chain="chainStore.selectedNode"
              :token1="{ value: 1022.333, name: `${item.token}` }"
              :token2="{ value: 126.611 }"
            />
            <div
              class="flex flex-row items-center justify-evenly py-4 text-base"
            >
              <span>
                0.1228
                <span class="text-xs text-red-500">
                  @C{{ chainStore.selectedNode }}
                </span>
              </span>
              <NuxtLink
                :to="`/swap?type=buy&token=${item.token}`"
                class="rounded-lg border border-custom-dark p-1 px-2 hover:scale-105 dark:border-custom-cyan"
              >
                BUY ${{ item.token }}
              </NuxtLink>
              <NuxtLink
                :to="`/swap?type=sell&token=${item.token}`"
                class="rounded-lg border border-custom-dark p-1 px-2 hover:scale-105 dark:border-custom-cyan"
              >
                SELL ${{ item.token }}
              </NuxtLink>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
