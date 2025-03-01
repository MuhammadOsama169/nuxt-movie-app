<script setup lang="ts">
import { usePostStore } from "@/stores/PostStore";
import type { PostTypes } from "@/types/PostDataTypes";
const postStore = usePostStore();

definePageMeta({
  layout: "sidebar-layout",
});
const postData = ref<PostTypes[]>([]);

const { data } = await useAsyncData("movies", async () => {
  const response: any = await $fetch(`http://localhost:8000/api/posts`);
  postData.value = response;
  postStore.setPostData(postData.value);
  return response;
});

async function handleCreateNewReq() {
  //   try{
  //     const res = await $fetch('http://localhost:8000/api/posts',{
  //       method:'post',
  //       body:{},
  //     })
  //   }catch(err){
  // console.log(err)
  //   }
}
</script>

<template>
  <main>
    <section class="flex w-full justify-between">
      <div></div>
      <div>
        <button class="p-2 rounded-md border m-4" @click="handleCreateNewReq">
          Create a request
        </button>
      </div>
    </section>
    <h1 class="text-2xl font-bold">All requests</h1>
    <div v-if="postData.length > 0">
      <div class="grid grid-cols-3" v-for="post in postData">
        <!-- req card -->
        <PostCard :postData="post" />
      </div>
    </div>
    <div v-else="postData.length === 0">
      <span class="text-white">Currently no requests have been made</span>
    </div>
  </main>
</template>
