<script setup lang="ts">
import { chains as chainsMock } from "@/chains-mock";
const chainStore = useChainStore();
const route = useRoute();

if (
  (route.query.type !== "buy" && route.query.type !== "sell") ||
  !route.query.token
) {
  navigateTo("/pool");
}

const selectedAmount = ref(0);

const saveAmount = (amount: number): void => {
  selectedAmount.value = amount;
};

const minHintShown = ref(false);
const maxHintShown = ref(false);

const showMinHint = (): void => {
  minHintShown.value = !minHintShown.value;
};

const showMaxHint = (): void => {
  maxHintShown.value = !maxHintShown.value;
};

const transactionHintShown = ref(false);

const showTransactionHint = (): void => {
  transactionHintShown.value = !transactionHintShown.value;
};

const chains = chainsMock.map((chain) => {
  return `${chain.id}`;
});

const anotherOperation = computed(() => {
  return route.query.type === "buy" ? "sell" : "buy";
});

type AvailableTokens = "VOOTAA" | "KDS" | "KDL" | "CRKK" | "KDAV" | "USDV";

const userBalance = reactive<Record<AvailableTokens, number>>({
  VOOTAA: 3245.58,
  KDS: 56799.17,
  KDL: 0,
  CRKK: 0,
  KDAV: 0,
  USDV: 0,
});

const poolLiquidity = reactive<Record<AvailableTokens, number>>({
  VOOTAA: 162513.96,
  KDS: 1310190.22,
  KDL: 0,
  CRKK: 0,
  KDAV: 0,
  USDV: 0,
});

const activeTokens = computed(() => {
  const token = route.query.token as AvailableTokens;
  return {
    buy: route.query.type === "buy" ? token : "VOOTAA",
    sell: route.query.type === "sell" ? token : "VOOTAA",
  };
});

const getUserBalance = (token: AvailableTokens): number =>
  userBalance[token] ?? 0;

const getPoolLiquidity = (token: AvailableTokens): number =>
  poolLiquidity[token] ?? 0;

const amountForSwap = computed((): number[] => {
  const nonVootaaMultiplier = activeTokens.value.sell === "VOOTAA" ? 1 : 10;
  const amounts: number[] = [10.0, 20.0, 50.0, 100.0, 200.0, 500.0, 1000.0];

  const finalAmounts = amounts.map((amount) => {
    return (amount *= nonVootaaMultiplier);
  });

  finalAmounts.push(getPoolLiquidity(activeTokens.value.sell) * 0.01);

  return finalAmounts;
});

const percentageForSwap: number[] = [
  0.01, 0.02, 0.03, 0.04, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
];

const originalAmount = computed(() => {
  if (selectedAmount.value === 0) {
    return 0;
  }

  if (selectedAmount.value <= 1) {
    return selectedAmount.value * getUserBalance(activeTokens.value.sell);
  } else {
    return selectedAmount.value;
  }
});

const PLATFORM_FEE = 0.03;

const amountToReceive = computed(() => {
  return originalAmount.value * (1 - PLATFORM_FEE);
});

type FormattedAmount = {
  wholePart: string;
  pennyPart: string;
};

const formatResultAmount = (amount: number): FormattedAmount => {
  const splitted = amount.toFixed(4).toString().split(".");

  return {
    wholePart: splitted[0],
    pennyPart: splitted[1],
  };
};

watch(
  () => route.query.type,
  () => {
    selectedAmount.value = 0;
  }
);
</script>
<template>
  <div
    class="relative mx-auto h-full w-2/3 text-custom-dark dark:text-custom-cyan lg:w-full lg:px-4"
  >
    <h2 class="sr-only">Swap block</h2>
    <section
      class="mb-4 flex h-12 w-full items-center justify-around rounded-md border border-custom-dark dark:border-custom-cyan"
    >
      <h3 class="sr-only">Choose currency</h3>
      <span>Swap your</span>
      <section
        class="flex h-full w-1/3 items-center justify-between bg-custom-dark px-2 font-semibold text-white dark:bg-custom-cyan dark:text-custom-dark"
      >
        <h4 class="sr-only">Active tokens</h4>
        <span> ${{ activeTokens.sell }} </span>
        <span>to</span>
        <span> ${{ activeTokens.buy }} </span>
      </section>

      <section class="flex items-center space-x-2">
        <span>on Chain</span>
        <span class="hidden text-red-400 lg:inline"
          >#{{ chainStore.selectedNode?.toString() || "None" }}</span
        >
        <USelectMenu
          v-if="chainStore.selectedNode !== null"
          v-model="chainStore.selectedNode"
          :options="chains"
          class="lg:hidden"
        />
      </section>
      <NuxtLink
        :to="`/swap?type=${anotherOperation}&token=${route.query.token}`"
        class="flex items-center justify-center rounded-md border border-custom-dark px-4 hover:scale-105 dark:border-custom-cyan"
      >
        <UIcon name="ic:baseline-swap-horiz" class="h-8 w-8" />
      </NuxtLink>
    </section>
    <div
      class="mb-4 flex h-full w-full flex-col items-center rounded-md border border-custom-dark p-1 text-custom-dark dark:border-custom-cyan dark:text-custom-cyan"
    >
      <h3 class="sr-only">Swap info</h3>
      <div class="flex w-full items-center justify-evenly py-2">
        <div class="flex flex-col items-center justify-between px-2">
          <span>Your balance:</span>
          <span>Pool liquidity:</span>
        </div>
        <div class="flex flex-col justify-center text-center">
          <span>
            {{ getUserBalance(activeTokens.sell).toLocaleString() }}
          </span>
          <hr />
          <span>
            {{ getPoolLiquidity(activeTokens.sell).toLocaleString() }}
          </span>
        </div>
        <span>${{ activeTokens.sell }}</span>
        <div class="flex flex-col justify-center text-center">
          <span>
            {{ getUserBalance(activeTokens.buy).toLocaleString() }}
          </span>
          <hr />
          <span>
            {{ getPoolLiquidity(activeTokens.buy).toLocaleString() }}
          </span>
        </div>
        <span>${{ activeTokens.buy }}</span>
      </div>
      <hr class="w-full" />
      <div class="h-full w-full p-2">
        <p class="mb-2">Choose your amount:</p>
        <div class="grid h-fit grid-cols-2 grid-rows-3">
          <div
            class="relative col-span-2 row-span-1 mb-4 flex w-full items-center justify-evenly border-b border-custom-dark p-4 pb-1 dark:border-custom-cyan"
          >
            <button
              type="button"
              class="absolute left-1 top-0 flex size-5 items-center justify-center rounded-full bg-custom-dark dark:bg-custom-cyan"
              @click="showMinHint"
            >
              <UIcon
                name="ic:baseline-question-mark"
                class="h-3 w-3 text-custom-cyan dark:bg-custom-dark"
              />
            </button>
            <p
              v-if="minHintShown"
              class="absolute -top-1 left-8 text-xs font-medium text-red-500"
            >
              Limit the minimum amout to {{ amountForSwap[0] }}
            </p>
            <button
              type="button"
              class="absolute right-1 top-0 flex size-5 items-center justify-center rounded-full bg-custom-dark dark:bg-custom-cyan"
              @click="showMaxHint"
            >
              <UIcon
                name="ic:baseline-question-mark"
                class="h-3 w-3 text-custom-cyan dark:bg-custom-dark"
              />
            </button>
            <p
              v-if="maxHintShown"
              class="absolute -top-1 right-8 text-xs font-medium text-red-500"
            >
              Limit to 1% of pool size
            </p>
            <button
              v-for="amount in amountForSwap"
              :key="amount"
              type="button"
              class="flex items-center justify-center rounded-md border border-custom-dark border-opacity-0 p-1 py-2 text-sm hover:border-opacity-100 dark:border-custom-cyan dark:border-opacity-0 dark:hover:border-opacity-100"
              :class="
                selectedAmount === amount
                  ? 'border-opacity-100 dark:border-opacity-100'
                  : ''
              "
              @click="saveAmount(amount)"
            >
              <span>
                {{ amount.toLocaleString() }}
              </span>
            </button>
          </div>
          <div
            class="col-span-1 row-span-2 grid grid-cols-5 grid-rows-3 gap-0 border-r border-custom-dark pr-4 dark:border-custom-cyan"
          >
            <button
              v-for="percentage in percentageForSwap"
              :key="percentage"
              type="button"
              :disabled="
                userBalance[activeTokens.sell] * percentage >=
                last(amountForSwap)
              "
              class="flex items-center justify-center rounded-md border border-custom-dark border-opacity-0 p-1 text-sm hover:border-opacity-100 dark:border-custom-cyan dark:border-opacity-0 dark:hover:border-opacity-100"
              :class="{
                'border-opacity-100 dark:border-opacity-100':
                  selectedAmount === percentage,
                'text-custom-gray dark:text-custom-green':
                  userBalance[activeTokens.sell] * percentage >=
                  last(amountForSwap),
              }"
              @click="saveAmount(percentage)"
            >
              <span> {{ percentage * 100 }}% </span>
            </button>
          </div>
          <div
            class="relative col-span-1 row-span-2 flex flex-col justify-evenly pl-4 text-end text-sm"
          >
            <span class="absolute left-4 top-0 text-xs">Estimate:</span>
            <p>
              Price Effect:
              <span>-0.52%</span>
            </p>
            <p>
              1
              <span>$VOOTAA</span>
              =
              <span>8.0116 $KDS</span>
            </p>
            <p>
              {{ PLATFORM_FEE * 100 }}% Platform Fee:
              <span>{{ (originalAmount * PLATFORM_FEE).toFixed(4) }} $KDS</span>
            </p>
          </div>
        </div>
        <div class="flex w-full items-center justify-evenly p-2">
          <div>
            <span class="text-3xl">
              {{ formatResultAmount(originalAmount).wholePart }}.
            </span>
            <span class="pr-4">
              {{ formatResultAmount(originalAmount).pennyPart }}
            </span>
            <span>$VOOTAA</span>
          </div>
          <UIcon
            name="ic:baseline-keyboard-double-arrow-right"
            class="h-8 w-8 bg-custom-dark dark:bg-custom-cyan"
          />
          <div>
            <span class="text-3xl">
              {{ formatResultAmount(amountToReceive).wholePart }}.
            </span>
            <span class="pr-4">
              {{ formatResultAmount(amountToReceive).pennyPart }}
            </span>
            <span>$KDS</span>
          </div>
        </div>
      </div>
    </div>
    <button
      :disabled="originalAmount <= 0"
      type="button"
      class="flex h-full w-full items-center justify-center rounded-md border border-custom-dark bg-transparent p-4 dark:border-none dark:bg-custom-cyan"
    >
      <p class="text-custom-dark">
        <span class="text-4xl font-semibold">SWAP</span>
        <sub>
          {
          {{ capitalize(route.query.type?.toString() ?? "") }}
          {{ route.query.token }}
          }
        </sub>
      </p>
    </button>
    <div class="mt-4 flex h-full w-full flex-row justify-end space-x-4">
      <p
        v-if="transactionHintShown"
        class="text-right text-xs font-medium text-custom-cyan"
      >
        The default transaction expiration time is 10 minutes,
        <br />
        the default transaction time is 20 minutes,
        <br />
        and the default price slippage is 0.75%.
      </p>
      <button
        type="button"
        class="flex size-5 items-center justify-center rounded-full bg-custom-dark dark:bg-custom-cyan"
        @click="showTransactionHint"
      >
        <UIcon
          name="ic:baseline-question-mark"
          class="h-3 w-3 text-custom-cyan dark:bg-custom-dark"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>
hr {
  @apply border-custom-dark dark:border-custom-cyan;
}
</style>
