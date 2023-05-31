<template>
  <button
    type="button"
    class="alef-button"
    :class="[getButtonTypeClass(), { 'alef-button_icon': iconName }]"
    @click="handleClick"
  >
    <AlefIcon v-if="iconName" :name="iconName" />
    <p class="alef-button__text">{{ text }}</p>
  </button>
</template>

<script setup lang="ts">
import AlefIcon from "@components/AlefIcon.vue";

type ButtonType = "default" | "outlined" | "flat";
interface IAlefButtonProps {
  text: string;
  iconName?: string;
  type?: ButtonType;
}

const { text, type } = withDefaults(defineProps<IAlefButtonProps>(), {
  iconName: "",
  type: "default",
});
const emit = defineEmits(["click"]);

const getButtonTypeClass = () => {
  if (type === "default") return;
  return `alef-button_${type}`;
};
const handleClick = () => emit("click");
</script>

<style scoped lang="scss">
@import "@assets/styles/components/AlefButton.scss";
</style>
