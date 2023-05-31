<template>
  <div class="alef-input">
    <p class="alef-input__placeholder">
      {{ placeholder }}
    </p>
    <input
      class="alef-input__textfield"
      type="text"
      @input="onInput(($event.target as HTMLInputElement).value)"
      :value="modelValue"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface IAlefInputProps {
  placeholder: string;
  modelValue: string;
}

const { placeholder, modelValue } = defineProps<IAlefInputProps>();
const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void;
}>();

const input = ref("");

const onInput = (value: string) => {
  input.value = value;
  emit("update:modelValue", input.value);
};
</script>

<style scoped lang="scss">
@import "@assets/styles/components/AlefInput.scss";
</style>
