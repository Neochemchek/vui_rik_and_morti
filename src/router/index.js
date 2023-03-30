import { createRouter, createWebHistory } from "vue-router";
import RickAndMortyList from "../views/RickAndMortyList.vue";
import mort_char from "../views/mort_char.vue";

const routes = [
  {
    path: "/",
    name: "RickAndMortyList",
    component: RickAndMortyList,
  },
  {
    path: "/character",
    name: "mort_char",
    component: mort_char,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
