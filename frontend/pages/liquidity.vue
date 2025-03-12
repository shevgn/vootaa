<script setup lang="ts">
import type { Token } from "@/types/tokens";
const chainStore = useChainStore();

export type PoolsLiquidities = Partial<
  Record<Token, Partial<Record<Token, number>>>
>;

const poolsLiquidities = ref<PoolsLiquidities>({
  KDS: {
    KDS: 12_345_566.77,
    VOOTAA: 1_550_603.18,
  },
  KDL: {
    KDL: 10_345_555.66,
    VOOTAA: 1_133_333.99,
  },
  CRKK: {
    CRKK: 6_666_166.22,
    VOOTAA: 1_555_555.55,
  },
  KDAV: {
    KDAV: 2_355_555.55,
    VOOTAA: 1_110_103.11,
  },
  USDV: {
    USDV: 2_323_232.23,
    VOOTAA: 1_232_323.23,
  },
});

const userLiquidities = ref<PoolsLiquidities>({
  KDS: {
    KDS: 1_234_566.67,
    VOOTAA: 155_060.32,
  },
  KDL: {
    KDL: 0,
    VOOTAA: 0,
  },
  CRKK: {
    CRKK: 0,
    VOOTAA: 0,
  },
  KDAV: {
    KDAV: 0,
    VOOTAA: 0,
  },
  USDV: {
    USDV: 0,
    VOOTAA: 0,
  },
});

function getLiquidity(token1: Token, token2: Token): number {
  return poolsLiquidities.value[token1]?.[token2] ?? 0;
}

const formatLiquidities = (token: Token): string => {
  const sameTokenVal = getLiquidity(token, token);
  const vootaaVal = getLiquidity(token, "VOOTAA");
  return `${sameTokenVal.toLocaleString()} $${token} - ${vootaaVal.toLocaleString()} $VOOTAA`;
};

type Liquidity = {
  token: Token;
  pool: string;
  liquiduty: string;
};

const items = ref<Liquidity[]>([
  {
    token: "KDS",
    pool: "$KDS - $VOOTAA",
    liquiduty: formatLiquidities("KDS"),
  },
  {
    token: "KDL",
    pool: "$KDL - $VOOTAA",
    liquiduty: formatLiquidities("KDL"),
  },
  {
    token: "CRKK",
    pool: "$CRKK - $VOOTAA",
    liquiduty: formatLiquidities("CRKK"),
  },
  {
    token: "KDAV",
    pool: "$KDAV - $VOOTAA",
    liquiduty: formatLiquidities("KDAV"),
  },
  {
    token: "USDV",
    pool: "$USDV - $VOOTAA",
    liquiduty: formatLiquidities("USDV"),
  },
]);

const fieldStyles = {
  liquiduty: "text-xs break-words",
};
</script>
<template>
  <BaseAccordion :items="items" :field-styles="fieldStyles">
    <template #heading>
      <table class="w-full">
        <thead>
          <tr>
            <th class="w-1/2">Pool</th>
            <th class="w-1/3">Liquidity</th>
            <th />
          </tr>
        </thead>
      </table>
    </template>
    <template #content-0>
      <LiquidityAccordionContent
        :pools-liquidities="poolsLiquidities"
        :user-liquidities="userLiquidities"
        token="KDS"
      />
    </template>

    <template #content-1>
      <LiquidityAccordionContent
        :pools-liquidities="poolsLiquidities"
        :user-liquidities="userLiquidities"
        token="KDL"
      />
    </template>
    <template #content-2>
      <LiquidityAccordionContent
        :pools-liquidities="poolsLiquidities"
        :user-liquidities="userLiquidities"
        token="CRKK"
      />
    </template>
    <template #content-3>
      <LiquidityAccordionContent
        :pools-liquidities="poolsLiquidities"
        :user-liquidities="userLiquidities"
        token="KDAV"
      />
    </template>
    <template #content-4>
      <LiquidityAccordionContent
        :pools-liquidities="poolsLiquidities"
        :user-liquidities="userLiquidities"
        token="USDV"
      />
    </template>
  </BaseAccordion>
</template>
