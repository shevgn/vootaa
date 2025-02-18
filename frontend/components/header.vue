<script setup lang="ts">
const mounted = ref(false);

const route = useRoute();

const path = computed(() => {
  return route.path;
});

onMounted(() => {
  setTimeout(() => {
    mounted.value = true;
  }, 100);
});
</script>

<template>
  <header class="flex flex-row items-center">
    <h1 class="sr-only text-lg text-custom-dark dark:text-custom-cyan">
      Vootaa
    </h1>
    <svg
      class="mr-1 h-12 w-12"
      viewBox="0 0 500 500"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>logo</title>
      <g
        id="vootaa"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="logo" stroke="">
          <!--
          <g id="bg-group">
            <circle class="stroke-custom-dark dark:stroke-custom-cyan" stroke-width="8" id="cicle" cx="250" cy="250"
              r="250"></circle>
          </g>
-->
          <g id="logo-group" transform="translate(80, 42)" stroke-width="10">
            <path
              id="path"
              class="fill-custom-dark dark:fill-custom-cyan"
              d="M165.38866,346.818251 L165.38866,360.331212 C165.38866,387.945449 143.002897,410.331212 115.38866,410.331212 C87.7744222,410.331212 65.3886597,387.945449 65.3886597,360.331212 L65.3886597,60.3312117 C65.3886597,32.7169742 87.7744222,10.3312117 115.38866,10.3312117 C143.002897,10.3312117 165.38866,32.7169742 165.38866,60.3312117 L165.38866,256.990445 L165.38866,256.990445"
              transform="translate(115.3887, 210.3312) rotate(-20) translate(-115.3887, -210.3312)"
            />
            <path
              id="circle"
              class="fill-custom-green stroke-white dark:stroke-custom-black"
              d="M179.096098,238.800919 C189.526707,233.94026 201.812819,233.056151 213.482106,237.300618 C225.023732,241.49865 233.800692,249.92764 238.696589,260.197381 C243.597095,270.476788 244.609786,282.600334 240.613702,294.169629 L240.313496,295.012583 C236.064601,306.664866 227.493267,315.494813 217.068709,320.352652 C206.6381,325.21331 194.351989,326.097419 182.682701,321.852953 C171.141075,317.65492 162.364116,309.225931 157.468218,298.95619 C152.567713,288.676783 151.555021,276.553237 155.551106,264.983941 L155.851311,264.140987 C160.100207,252.488705 168.67154,243.658758 179.096098,238.800919 Z"
              transform="translate(198.0824, 279.5768) rotate(20) translate(-198.0824, -279.5768)"
            />
            <rect
              id="box"
              class="fill-custom-dark dark:fill-custom-cyan"
              transform="translate(259.5939, 111.0703) rotate(20) translate(-259.5939, -111.0703)"
              x="214.593909"
              y="16.0702692"
              width="90"
              height="190"
              rx="45"
            />
          </g>
        </g>
      </g>
    </svg>
    <div class="flex w-full justify-between">
      <nav class="relative flex items-center">
        <ul
          class="flex flex-row items-center space-x-4 text-custom-dark dark:text-custom-cyan lg:space-x-8"
        >
          <li class="mr-4">
            <NuxtLink to="/" class="text-xl">Vootaa</NuxtLink>
          </li>
          <li
            class="mr-4 border-b-2 border-custom-dark transition dark:border-custom-cyan"
            :class="
              path === '/pool'
                ? 'border-opacity-100 dark:border-opacity-100'
                : 'border-opacity-0 dark:border-opacity-0'
            "
          >
            <NuxtLink to="/pool" class="">Pool</NuxtLink>
          </li>
          <li
            class="mr-4 border-b-2 border-custom-dark transition dark:border-custom-cyan"
            :class="
              path === '/liquidity'
                ? 'border-opacity-100 dark:border-opacity-100'
                : 'border-opacity-0 dark:border-opacity-0'
            "
          >
            <NuxtLink to="/liquidity" class=""> Liquidity </NuxtLink>
          </li>
          <li
            class="mr-4 border-b-2 border-custom-dark transition dark:border-custom-cyan"
            :class="
              path === '/swap'
                ? 'border-opacity-100 text-custom-dark dark:border-opacity-100 dark:text-custom-cyan'
                : 'pointer-events-none border-opacity-0 text-custom-gray dark:border-opacity-0 dark:text-custom-green'
            "
          >
            <NuxtLink :to="{ path: '/swap', query: route.query }"
              >Swap</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <div class="flex items-center space-x-4">
        <form action="" class="h-full">
          <input
            type="text"
            placeholder="input your K:account"
            class="h-full w-64 rounded-lg bg-custom-gray px-4 py-1 text-custom-dark placeholder:text-custom-dark placeholder-shown:text-sm focus-visible:outline-custom-green dark:bg-custom-dark dark:text-custom-cyan dark:placeholder:text-custom-cyan dark:focus-visible:outline-custom-green"
          />
        </form>
        <button
          class="rounded-lg border border-custom-dark p-1 px-2 hover:bg-gray-100 dark:border-custom-cyan dark:hover:bg-custom-dark"
        >
          <span
            class="text-sm text-custom-dark dark:text-custom-cyan lg:text-base"
            >Connect to wallet</span
          >
        </button>
        <USkeleton v-if="!mounted" class="h-6 w-6 rounded-full" />
        <ClientOnly v-else>
          <ColorModeSwitch />
        </ClientOnly>
      </div>
    </div>
  </header>
</template>
