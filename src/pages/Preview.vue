<template>
  <div class="preview" v-if="recordLength">
    <div class="preview__container">
      <div class="preview__personal-info">
        <p class="preview__title">Персональные данные</p>
        <p class="preview__value">
          {{ record.parent.name }}, {{ record.parent.age }}
        </p>
      </div>
      <div class="preview__children">
        <p class="preview__title">Дети</p>
        <AlefChildrenCard
          class="preview__card"
          v-for="child of record.children"
          :key="child.id"
          :id="child.id"
          :name="child.name"
          :age="child.age"
        />
      </div>
      <AlefButton
        class="preview__button"
        text="Очистить"
        @click="handleRemoveRecords"
      />
    </div>
  </div>
  <div v-else class="preview__non-records">Нет записей</div>
</template>

<script setup lang="ts">
import { IRecord } from "@/interfaces/IRecord";
import AlefButton from "@components/AlefButton.vue";
import AlefChildrenCard from "@components/AlefChildrenCard.vue";

import { computed, ref } from "vue";

const record = ref({} as IRecord);

const getRecordFromStorage = () => {
  const storageRecord: string | null = sessionStorage.getItem("record");

  if (storageRecord) {
    record.value = JSON.parse(storageRecord);
  } else {
    record.value = {} as IRecord;
  }
};
getRecordFromStorage();

const handleRemoveRecords = () => {
  record.value = {} as IRecord;
  sessionStorage.removeItem("record");
  alert("Данные очищены");
};
const recordLength = computed(() => Object.entries(record.value).length);
</script>

<style scoped lang="scss">
@import "@assets/styles/pages/Preview.scss";
</style>
