<template>
  <div class="children-card">
    <p class="children-card__text">{{ name }}, {{ age }}</p>
  </div>
</template>

<script setup lang="ts">
import { IChildren } from "@/interfaces/IForm";

const { name, age } = defineProps<IChildren>();
</script>

<style scoped lang="scss">
@import "@assets/styles/components/AlefChildrenCard.scss";
</style>
