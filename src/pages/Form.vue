<template>
  <div class="form">
    <div class="form__container">
      <div class="form__personal-info">
        <p class="form__title">Персональные данные</p>
        <AlefInput
          class="form__input"
          placeholder="Имя"
          v-model="personalInfo.name"
        />
        <AlefInput
          class="form__input"
          placeholder="Возраст"
          v-model="personalInfo.age"
        />
      </div>

      <div class="form__children">
        <div class="form__header">
          <p class="form__title">Дети (макс. 5)</p>
          <AlefButton
            v-if="isVisibleButton"
            text="Добавить ребенка"
            type="outlined"
            icon-name="plus"
            @click="addChild"
          />
        </div>
        <div
          v-for="child of children"
          :key="child.id"
          class="form__child-inputs"
        >
          <AlefInput placeholder="Имя" v-model="child.name" />
          <AlefInput placeholder="Возраст" v-model="child.age" />
          <AlefButton
            text="Удалить"
            type="flat"
            @click="removeChild(child.id)"
          />
        </div>
        <AlefButton v-if="children.length" text="Сохранить" @click="saveInfo" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IChildren, IParent } from "@/interfaces/IForm";
import { useRecordStore } from "@/store/record";
import AlefButton from "@components/AlefButton.vue";
import AlefInput from "@components/AlefInput.vue";

import { Ref, computed, ref } from "vue";

const { setRecord } = useRecordStore();
const personalInfo: Ref<IParent> = ref({
  name: "",
  age: "",
});
const children: Ref<IChildren[]> = ref([]);

const isVisibleButton = computed(() => children.value.length < 5);
const removeChild = (childId: number): void => {
  children.value = children.value.filter((child) => child.id !== childId);
};
const addChild = (): void => {
  let lastChild = {} as IChildren;

  lastChild = children.value[children.value.length - 1];

  if (!lastChild)
    lastChild = {
      id: Number(Math.random().toFixed(2)),
      name: "",
      age: "",
    };

  if (children.value.length < 5) {
    children.value = [
      ...children.value,
      {
        id: Number(Math.random().toFixed(2)),
        name: "",
        age: "",
      } as IChildren,
    ];
  }
};

const clearForm = () => {
  personalInfo.value = {
    name: "",
    age: "",
  };
  children.value = [];
};
const isValidForm = (form: IChildren | IParent): boolean => {
  for (let [_, value] of Object.entries(form)) {
    if (!value) return false;
  }
  return true;
};
const saveInfo = () => {
  const isValidChildren = children.value.every((child) => isValidForm(child));

  if (isValidForm(personalInfo.value) && isValidChildren) {
    setRecord({
      id: Number(Math.random().toFixed(2)),
      parent: personalInfo.value,
      children: children.value,
    });
    clearForm();
    alert("Данные сохранены");
  } else {
    alert("Вы не заполнили все поля");
  }
};
</script>

<style scoped lang="scss">
@import "@assets/styles/pages/Form.scss";
</style>
