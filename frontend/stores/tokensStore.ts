import { defineStore } from "pinia";
import type { Token } from "~/types/tokens";

export const useTokensStore = defineStore("token", () => {
    const vootaaExchangeRate = reactive<
        Record<Exclude<Token, "VOOTAA">, number>
    >({
        KDS: 8.0116,
        KDAV: 0,
        KDL: 0,
        CRKK: 0,
        USDV: 0,
    });

    function getExchangeRate(to: Token, from: Token = "VOOTAA"): number {
        if (from === to) {
            return 1;
        }

        if (from === "VOOTAA" && to !== "VOOTAA") {
            return vootaaExchangeRate[to];
        } else if (from !== "VOOTAA" && to === "VOOTAA") {
            return 1 / vootaaExchangeRate[from];
        }

        return 0;
    }

    return { getExchangeRate };
});
