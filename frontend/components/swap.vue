<script setup lang="ts">
const amountForSwap: number[] = [
  10.0, 20.0, 50.0, 100.0, 200.0, 500.0, 1000.0, 1660.0,
];

const percentageForSwap: number[] = [
  0.01, 0.02, 0.03, 0.04, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
];

let selectedAmount = ref(0);

const saveAmount = (amount: number): void => {
  selectedAmount.value = amount;
  console.log(amount);
};

let minHintShown = ref(false);
let maxHintShown = ref(false);

const showMinHint = (): void => {
  minHintShown.value = !minHintShown.value;
};

const showMaxHint = (): void => {
  maxHintShown.value = !maxHintShown.value;
};

let transactionHintShown = ref(false);

const showTransactionHint = (): void => {
  transactionHintShown.value = !transactionHintShown.value;
};
</script>

<template>
  <div class="w-full relative h-full px-8 text-custom-dark dark:text-custom-cyan">
    <h2 class="sr-only">Swap block</h2>
    <div
      class="border dark:border-custom-cyan border-custom-dark h-12 w-full flex rounded-md justify-between items-center px-4 mb-4"
    >
      <h3 class="sr-only">Choose currency</h3>
      <span>Swap your</span>
      <span
        class="dark:bg-custom-cyan bg-custom-dark h-full flex items-center px-2 justify-between w-1/3 font-medium text-white dark:text-custom-dark"
      >
        <span> $VOOTAA </span>
        to
        <span> $KDS </span>
      </span>

      <span>
        on Chain
        <span class="text-red-400"> #8 </span>
      </span>
      <button
        type="button"
        class="flex items-center border dark:border-custom-cyan border-custom-dark rounded-md px-4"
      >
        <UIcon name="ic:baseline-swap-horiz" class="w-8 h-8" />
      </button>
    </div>
    <div
      class="border dark:border-custom-cyan border-custom-dark h-full w-full flex flex-col rounded-md text-custom-dark dark:text-custom-cyan p-1 items-center mb-4"
    >
      <h3 class="sr-only">Swap info</h3>
      <div class="flex items-center justify-evenly w-full p-2">
        <div class="flex items-center px-2 justify-between flex-col">
          <span>Your balance:</span>
          <span>Pool liquidity:</span>
        </div>
        <div class="flex justify-center flex-col text-center">
          <span>3,245.58</span>
          <hr />
          <span>162,513.96</span>
        </div>
        <span>$VOOTAA</span>
        <div class="flex justify-center flex-col text-center">
          <span>3,245.58</span>
          <hr />
          <span>162,513.96</span>
        </div>
        <span>$VOOTAA</span>
      </div>
      <hr class="w-full" />
      <div class="w-full h-full p-2">
        <p class="mb-2">Choose your amount:</p>
        <div class="grid grid-cols-2 grid-rows-3 h-fit p-2">
          <div
            class="relative row-span-1 col-span-2 flex justify-evenly items-center w-full border-b darkL:border-custom-cyan border-custom-dark mb-4 p-4 pb-1"
          >
            <button
              type="button"
              @click="showMinHint"
              class="absolute top-1 -left-1 rounded-full size-5 flex items-center justify-center dark:bg-custom-cyan bg-custom-dark"
            >
              <UIcon name="ic:baseline-question-mark" class="w-3 h-3 dark:bg-custom-dark text-custom-cyan" />
            </button>
            <p
              v-if="minHintShown"
              class="absolute text-red-500 -top-2 left-6 text-xs"
            >
              Limit the minimum amout to {{ amountForSwap[0] }}
            </p>
            <button
              type="button"
              @click="showMaxHint"
              class="absolute top-1 -right-1 rounded-full size-5 flex items-center justify-center dark:bg-custom-cyan bg-custom-dark"
            >
              <UIcon name="ic:baseline-question-mark" class="w-3 h-3 dark:bg-custom-dark text-custom-cyan" />
            </button>
            <p
              v-if="maxHintShown"
              class="absolute text-red-500 -top-2 right-6 text-xs "
            >
              Limit to 1% of pool size
            </p>
            <button
              type="button"
              v-for="amount in amountForSwap"
              :key="amount"
              @click="saveAmount(amount)"
              class="border hover:border-opacity-100 dark:border-opacity-0 border-opacity-0 items-center justify-center dark:border-custom-cyan border-custom-dark rounded-md p-2 flex"
              :class="selectedAmount === amount ? 'dark:border-opacity-100 border-opacity-100' : ''"
            >
              <span>
                {{ amount.toFixed(1) }}
              </span>
            </button>
          </div>
          <div
            class="col-span-1 row-span-2 grid grid-cols-5 gap-2 grid-rows-3 border-r dark:border-custom-cyan border-custom-dark pr-4"
          >
            <button
              type="button"
              v-for="percentage in percentageForSwap"
              :key="percentage"
              @click="saveAmount(percentage)"
              class="flex dark:border-opacity-0 border-opacity-0 justify-center items-center p-1 border hover:border-opacity-100  dark:border-custom-cyan border-custom-dark rounded-md "
              :class="selectedAmount === percentage ? 'dark:border-opacity-100 border-opacity-100' : ''"
            >
              <span>
                {{ percentage * 100 }}%
              </span>
            </button>
          </div>
          <div
            class="relative flex flex-col pl-4 text-sm items-end col-span-1 row-span-2 justify-evenly"
          >
            <span class="absolute top-0 left-4 text-xs">Estimate:</span>
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
              3% Platform Fee:
              <span>156.1011 $KDS</span>
            </p>
          </div>
        </div>
        <div class="px-6 py-2 flex items-center w-full justify-evenly">
          <div>
            <span class="text-3xl">649.</span>
            <span class="pr-4">0543</span>
            <span>$VOOTAA</span>
          </div>
          <UIcon
            name="ic:baseline-keyboard-double-arrow-right"
            class="w-8 h-8 dark:bg-custom-cyan bg-custom-dark"
          />
          <div>
            <span class="text-3xl">5055.</span>
            <span class="pr-4">0543</span>
            <span>$KDS</span>
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="dark:bg-custom-cyan h-full flex items-center p-4 justify-center rounded-md w-full bg-transparent border border-custom-dark dark:border-none"
    >
      <span class="text-4xl dark:text-custom-dark font-semibold">SWAP</span>
    </button>
    <div class="flex flex-row justify-end space-x-4 mt-4 h-full w-full">
      <p
        v-if="transactionHintShown"
        class="text-xs text-right text-custom-cyan font-medium"
      >
        The default transaction expiration time is 10 minutes,
        <br />
        the default transaction time is 20 minutes,
        <br />
        and the default price slippage is 0.75%.
      </p>
      <button
        type="button"
        @click="showTransactionHint"
        class="rounded-full size-5 flex items-center justify-center dark:bg-custom-cyan  bg-custom-dark"
      >
        <UIcon name="ic:baseline-question-mark" class="w-3 h-3 dark:bg-custom-dark text-custom-cyan" />
      </button>
    </div>
  </div>
</template>

<style scoped>
hr {
  @apply dark:border-custom-cyan border-custom-dark;
}
</style>
