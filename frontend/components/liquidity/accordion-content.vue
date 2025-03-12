<script setup lang="ts">
import type { PoolsLiquidities } from "~/pages/liquidity.vue";
import type { Token } from "~/types/tokens";

const chainStore = useChainStore();

defineProps<{
  poolsLiquidities: PoolsLiquidities;
  userLiquidities: PoolsLiquidities;
  token: Token;
}>();

function getLiquidity(
  liquidities: PoolsLiquidities,
  token1: Token,
  token2: Token
): number {
  return liquidities[token1]?.[token2] ?? 0;
}

const changeLiquidityAmounts = ref<number[]>([0.1, 0.25, 0.5, 0.75, 1]);
const selectedLiquidityAmount = ref<number>(0.5);
</script>

<template>
  <PoolLiquidity
    title="Pool Liquidity"
    :token1="{
      name: token,
      value: getLiquidity(poolsLiquidities, token, token),
    }"
    :token2="{ value: getLiquidity(poolsLiquidities, token, 'VOOTAA') }"
  />
  <PoolLiquidity
    title="Your Liquidity"
    :token1="{
      name: token,
      value: getLiquidity(userLiquidities, token, token),
    }"
    :token2="{ value: getLiquidity(userLiquidities, token, 'VOOTAA') }"
  />
  <SelectChainHint v-if="chainStore.selectedNode === null" />
  <template v-else>
    <hr />
    <PoolLiquidity
      title="Pool Liquidity"
      :chain="chainStore.selectedNode"
      :token1="{
        name: token,
        value: getLiquidity(poolsLiquidities, token, token),
      }"
      :token2="{ value: getLiquidity(poolsLiquidities, token, 'VOOTAA') }"
    />
    <PoolLiquidity
      title="Your Liquidity"
      :chain="chainStore.selectedNode"
      :token1="{
        name: token,
        value: getLiquidity(userLiquidities, token, token),
      }"
      :token2="{ value: getLiquidity(userLiquidities, token, 'VOOTAA') }"
    />
    <hr />
    <div class="pl-8">
      <p class="py-1">
        Proportion: 10%
        <span class="text-2xs text-red-600">
          @C{{ chainStore.selectedNode }}
        </span>
      </p>
      <p class="py-1">
        Remove Liquidity Unlock Countdown: 10 Days
        <span class="text-2xs text-red-600">
          @C{{ chainStore.selectedNode }}
        </span>
      </p>
    </div>
    <hr />
    <div class="flex items-center justify-around">
      <span>
        Your balance
        <sub
          >(Chain
          <span class="text-red-600">#{{ chainStore.selectedNode }}</span>
          selected)</sub
        >
      </span>
      <span> 192,233.32 $KDS </span>
      <span> - </span>
      <span>10,111.19 $VOOTAA</span>
    </div>
    <div class="flex items-center justify-around p-2">
      <span class="text-lg font-medium">
        0.1228<span class="text-2xs"
          >5672
          <span class="text-red-600">@{{ chainStore.selectedNode }}</span>
        </span>
      </span>
      <button
        class="rounded-lg border border-custom-dark p-1 px-3 text-custom-dark hover:bg-gray-200 dark:border-custom-cyan dark:text-custom-cyan hover:dark:bg-gray-600"
        type="button"
      >
        <span>
          Add Liquidity To Chain
          <span class="font-semibold">#{{ chainStore.selectedNode }}</span>
        </span>
      </button>
    </div>
    <div class="flex items-center justify-around p-1">
      <button
        v-for="(amount, index) in changeLiquidityAmounts"
        :key="index"
        class="relative rounded-lg border border-custom-dark p-1 px-4 text-custom-dark transition hover:bg-gray-200 dark:border-custom-cyan dark:text-custom-cyan hover:dark:bg-gray-600"
        type="button"
        :class="
          selectedLiquidityAmount === amount ? 'animate-pulse border-2' : ''
        "
        @click="selectedLiquidityAmount = amount"
      >
        {{ amount * 100 }}%
      </button>
    </div>
    <p class="pt-1 text-center text-2xs">
      You will add {{ selectedLiquidityAmount * 100 }}% liquidity:
      {{ (192_233.32 * selectedLiquidityAmount).toLocaleString() }}
      ${{ token }} -
      {{ (10_111.19 * selectedLiquidityAmount).toLocaleString() }}
      $VOOTAA
    </p>
  </template>
</template>

<style scoped>
hr {
  @apply my-1 border-t-[0.5px] border-custom-dark dark:border-custom-cyan;
}
</style>
