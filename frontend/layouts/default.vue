<script setup lang="ts"></script>
<template>
  <div class="h-full w-full p-4">
    <Header />
    <main class="my-8 flex h-full w-full flex-row">
      <Chainweb />
      <slot />
    </main>
    <Footer />
  </div>
</template>
