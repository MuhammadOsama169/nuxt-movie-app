import { initialTrailerData } from "@/types/TrailerTypes";
import { defineStore } from "pinia";

export const useTrailerStore = defineStore("trailers", {
  state: () => ({
    trailer_dta: initialTrailerData,
  }),
  actions: {
    setData(res: typeof initialTrailerData) {
      this.trailer_dta = res;
    },
  },
});
