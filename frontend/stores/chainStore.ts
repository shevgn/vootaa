import { defineStore } from "pinia";

export const useChainStore = defineStore("chain", () => {
    const selectedNode = ref<number | null>(null);
    const setSelectedNode = (id: number | null) => {
        selectedNode.value = id;
    };

    return { selectedNode, setSelectedNode };
});
