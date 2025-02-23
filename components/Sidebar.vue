<script setup lang="ts">
defineProps<{
  isSidebarOpen: boolean;
}>();

import { sidebarItems } from "@/public/data/sidebarItem";

import { Icon } from "@iconify/vue";

const topItems = sidebarItems.slice(0, 2);
const bottomItems = sidebarItems.slice(3);
</script>

<template>
  <main
    v-auto-animate
    :class="
      isSidebarOpen
        ? 'flex w-[220px] fixed inset-0 bg-black z-20 xl:hidden'
        : 'xl:absolute xl:flex hidden w-[220px] h-[100vh] shadow-xl bg-[#0f0f0f]'
    "
  >
    <aside
      class="p-4 mobile:hidden tablet:hidden xl:visible h-full flex flex-col justify-between"
    >
      <!-- top items -->
      <section>
        <div
          v-for="item in topItems"
          class="flex flex-col justify-start text-white"
        >
          <button
            :key="item.id"
            :to="item.id"
            class="flex gap-2 items-center p-2 my-2"
          >
            <Icon :icon="item.icon" />
            <span>{{ item.title }}</span>
          </button>
        </div>
      </section>

      <!-- bottom items -->
      <section>
        <div v-for="item in bottomItems" class="flex flex-col justify-end">
          <button
            :key="item.id"
            :to="item.id"
            class="flex gap-2 items-center p-2 my-2 text-white"
          >
            <Icon :icon="item.icon" />
            <span>{{ item.title }}</span>
          </button>
        </div>
      </section>
    </aside>
  </main>
</template>
