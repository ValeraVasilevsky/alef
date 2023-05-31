<template>
  <div class="app">
    <AlefHeader />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import AlefHeader from "@components/AlefHeader.vue";
</script>

<style scoped lang="scss">
@import "@assets/styles/app.scss";
</style>
