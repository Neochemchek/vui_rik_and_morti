import { createStore } from "vuex";
import axiosInstance from "@/api/index";
import { CHARACTERS_BY_PAGE } from "@/api/routes";
export default createStore({
  state: {
    characters: {},
    pages: 0,
  },
  mutations: {
    setCharacters(state, { page, characters }) {
      state.characters[page] = characters;
    },
    setPages(state, pages) {
      state.pages = pages;
    },
  },
  actions: {
    async fetchCharacter({ commit }, page) {
      try {
        const { data } = await axiosInstance.get(CHARACTERS_BY_PAGE(page));
        const { info, results } = data;
        commit("setCharacters", { page, characters: results });
        commit("setPages", info.pages);
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  getters: {
    getCharasterById: (state) => (id, page) => {
      const pageCharacters = state.characters[page];
      if (pageCharacters) {
        return pageCharacters.find((character) => character.id === id);
      }
      return null;
    },
    getCharastersByPage: (state) => (page) => {
      const pageCharacters = state.characters[page];
      return pageCharacters;
    },
  },
});
