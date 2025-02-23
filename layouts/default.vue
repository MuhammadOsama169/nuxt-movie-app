<script setup lang="ts">
import { ref, computed } from "vue";
const isSidebarOpen = ref<boolean>(false);

const handleOpenSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
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
      <slot></slot>
    </div>
  </div>
</template>
