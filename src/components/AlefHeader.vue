<template>
  <div class="alef-header">
    <AlefIcon name="logo" class="alef-header__logo" />
    <div class="alef-header__links">
      <RouterLink
        class="alef-header__link"
        :class="{ 'alef-header__link_active': isActiveLink(link.id) }"
        v-for="link of links"
        :key="link.id"
        :to="link.to"
        exact
      >
        {{ link.title }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ILink } from "@/interfaces/ILink";
import AlefIcon from "@components/AlefIcon.vue";

import { Ref, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isActiveLink = (linkId: string) => linkId === route.name;
const links: Ref<ILink[]> = ref([
  { id: "Form", title: "Форма", to: "/" },
  { id: "Preview", title: "Превью", to: "preview" },
]);
</script>

<style scoped lang="scss">
@import "@assets/styles/components/AlefHeader.scss";
</style>
