<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <slot></slot>
</template>
