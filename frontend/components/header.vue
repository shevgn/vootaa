<script setup lang="ts">
</script>

<template>
  <header class="flex flex-row p-4 items-center space-x-2">
    <UIcon name="si:add-circle-fill" class="w-8 h-8" />
    <nav class="flex items-center space-x-4">
      <h1 class="mr-8">Vootaa</h1>
      <ul class="flex flex-row space-x-8 ">
        <li>
          <NuxtLink to="/swap">SWAP</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/pool">POOL</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/liquidity">LIQUIDITY</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="flex items-center space-x-4 ml-auto p-">
      <button>

      </button>
      <form action="">
        <input type="text" placeholder="wallet number" class="border border-gray-700 rounded-lg px-4 py-1">
      </form>
    </div>
  </header>
</template>
