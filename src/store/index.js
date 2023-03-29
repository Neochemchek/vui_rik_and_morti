import { createStore } from "vuex";
import axiosInstance from "@/api/index";
import { CHARACTERS_BY_PAGE } from "@/api/routes";
export default createStore({
  state: {},
  getters: {},
  modules: {},
  mutations: {
    setCharacter(state, { page, character }) {
      state.character[page] = character;
    },
  },
  actions: {
    fetchcharacter(page) {
      return axiosInstance
        .get(CHARACTERS_BY_PAGE(page))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
});
