<script setup lang="ts">
import type { Token } from "~/types/tokens";

const chainStore = useChainStore();

type AccordionItem = {
  token: Token;
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
    pool: "$USDV - $VOOTAA",
    avgPrice: 1.1056,
    min: 1.1158,
    max: 1.1011,
  },
];
</script>
<template>
  <BaseAccordion :items="items" :same-slot="true">
    <template #heading>
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
    </template>
    <template #default="{ token }">
      <PoolLiquidity :token1="{ name: token as Token }" />
      <SelectChainHint v-if="chainStore.selectedNode === null" />
      <template v-else>
        <PoolLiquidity
          :chain="chainStore.selectedNode"
          :token1="{ value: 1022.333, name: token as Token }"
          :token2="{ value: 126.611 }"
        />
        <div class="flex flex-row items-center justify-evenly py-4 text-base">
          <span>
            0.1228
            <span class="text-xs text-red-500">
              @C{{ chainStore.selectedNode }}
            </span>
          </span>
          <NuxtLink
            :to="`/swap?type=buy&token=${token}`"
            class="rounded-lg border border-custom-dark p-1 px-2 hover:scale-105 dark:border-custom-cyan"
          >
            BUY ${{ token }}
          </NuxtLink>
          <NuxtLink
            :to="`/swap?type=sell&token=${token}`"
            class="rounded-lg border border-custom-dark p-1 px-2 hover:scale-105 dark:border-custom-cyan"
          >
            SELL ${{ token }}
          </NuxtLink>
        </div>
      </template>
    </template>
  </BaseAccordion>
</template>
