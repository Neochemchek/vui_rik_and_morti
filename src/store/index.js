import { createStore } from "vuex";
import axiosInstance from "@/api/index";
import { CHARACTERS_BY_PAGE } from "@/api/routes";
export default createStore({
  state: {
    character: {},
    pages: 0,
  },
  getters: {},
  mutations: {
    setCharacter(state, { page, character }) {
      state.character[page] = character;
    },
    setPages(state, pages) {
      state.pages = pages;
    },
  },
  actions: {
    fetchCharacters({ commit }, page) {
      return axiosInstance
        .get(CHARACTERS_BY_PAGE(page))
        .then(({ data }) => {
          const { info, result } = data;
          commit("setCharacters", { page, character: result });
          commit("setPages", info.pages);
        })
        .catch((err) => console.log(err));
    },
  },
});
