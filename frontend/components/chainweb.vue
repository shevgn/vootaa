<script setup lang="ts">
const chainStore = useChainStore();

const hoveredNode = ref<number | null>(null);

const handleNodeHover = (nodeId: number | null) => {
  hoveredNode.value = nodeId;
};

const handleNodeClick = (nodeId: number) => {
  chainStore.setSelectedNode(nodeId);
};
</script>

<template>
  <div
    class="relative hidden h-full w-full max-w-screen-sm rounded-md border border-custom-dark p-4 dark:border-custom-cyan lg:block"
  >
    <div
      class="absolute left-4 right-4 top-4 -z-10 mb-4 flex flex-row justify-between font-semibold"
    >
      <span class="text-custom-dark dark:text-custom-cyan">CHAINWEB</span>
      <span class="text-custom-dark dark:text-custom-cyan">
        CHAIN ID:
        <span class="text-red-400">
          {{ chainStore.selectedNode || "None" }}
        </span>
      </span>
    </div>
    <SvgChainweb
      :handle-node-hover="handleNodeHover"
      :handle-node-click="handleNodeClick"
    />
  </div>
</template>
