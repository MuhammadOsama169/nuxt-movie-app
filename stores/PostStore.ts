import { initialPostData } from "@/types/PostDataTypes";
import { initialTrailerData } from "@/types/TrailerTypes";
import { defineStore } from "pinia";

export const usePostStore = defineStore("posts", {
  state: () => ({
    posts: initialPostData,
  }),
  actions: {
    setPostData(res: typeof initialPostData) {
      this.posts = res;
    },
  },
});
