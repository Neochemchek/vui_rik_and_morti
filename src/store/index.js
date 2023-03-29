import { createStore } from "vuex";
import axiosInstance from "@/api/index";
import { CHARACTERS_BY_PAGE } from "@/api/routes";
export default createStore({
  state: {
    character: {},
  },
  getters: {},
  mutations: {
    setCharacter(state, { page, character }) {
      state.character[page] = character;
    },
  },
  actions: {
    fetchCharavters(page) {
      return axiosInstance
        .get(CHARACTERS_BY_PAGE(page))
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
});
