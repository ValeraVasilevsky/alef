import { IRecord } from "@/interfaces/IRecord";
import { defineStore } from "pinia";

export const useRecordStore = defineStore("record", {
  state: () => ({
    record: {} as IRecord,
  }),
  actions: {
    setRecordInSessionStorage(record: IRecord) {
      if (sessionStorage.getItem("record") !== null) this.removeRecord();

      sessionStorage.setItem("record", JSON.stringify(record));

      return JSON.parse(sessionStorage.getItem("record") || "{}") as IRecord;
    },
    removeRecord() {
      sessionStorage.removeItem("record");
      this.record = {} as IRecord;
    },
    setRecord(record: IRecord) {
      this.record = this.setRecordInSessionStorage(record);
    },
  },
});
