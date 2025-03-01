<script setup lang="ts">
import type { PostTypes } from "@/types/PostDataTypes";
import { Icon } from "@iconify/vue";

defineProps<{
  postData: PostTypes;
}>();

function handleUpdate(id: number) {}
function handleDelete(id: number) {
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
  <main class="rounded-xl p-4 flex flex-col border mt-4">
    <p class="text-xl font-bold">{{ postData.title }}</p>
    <p class="text-md">{{ postData.body }}</p>

    <section class="flex gap-2 w-full justify-between">
      <div class="flex gap-2 items-center">
        <span>Likes:</span>
        <Icon icon="tabler:star-filled" />
      </div>

      <div class="justify-end flex">
        <button
          class="p-2 rounded-lg bg-blue-500 text-white"
          @click="handleUpdate(postData.user_id)"
        >
          Update
        </button>
        <button
          class="p-2 rounded-lg bg-red-500 text-white"
          @click="handleDelete(postData.user_id)"
        >
          Delete
        </button>
      </div>
    </section>
  </main>
</template>
