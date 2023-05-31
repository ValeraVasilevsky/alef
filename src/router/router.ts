import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Form",
      component: () => import("@/pages/Form.vue"),
    },
    {
      path: "/preview",
      name: "Preview",
      component: () => import("@/pages/Preview.vue"),
    },
  ] as RouteRecordRaw[],
});
