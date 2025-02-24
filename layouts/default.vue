<script setup lang="ts">
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import { onClickOutside } from "@vueuse/core";

const isSidebarOpen = ref<boolean>(false);
const target = ref<HTMLElement | null>(null);

function handleOpenSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
onClickOutside(target, () => {
  isSidebarOpen.value = false;
});
</script>

<template>
  <div class="relative bg-[#08080a] text-white min-h-screen">
    <Sidebar :isSidebarOpen="isSidebarOpen" />
    <div
      :class="[
        'flex flex-col xl:ml-[250px] overflow-y-auto h-[100vh] relative z-10',
        isSidebarOpen ? 'opacity-50' : 'opacity-1',
      ]"
    >
      <!-- for mobile -->
      <section className="flex xl:hidden w-full px-4 pt-4" ref="target">
        <button
          @click="handleOpenSidebar"
          className="flex justify-start w-full"
        >
          <Icon icon="hugeicons:left-to-right-list-dash" class="size-[30px]" />
        </button>
      </section>
      <!-- // -->
      <slot></slot>
    </div>
  </div>
</template>
