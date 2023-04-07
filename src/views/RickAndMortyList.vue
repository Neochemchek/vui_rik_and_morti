<template>
  <div class="home">
    Rick and Morty
    <div class="charcters-list">
      <character-block
        v-for="character in characters"
        :key="character.id"
        :character="character"
      ></character-block>
    </div>
    <v-pagination
      v-model="currentPage"
      :pages="pages"
      :range-size="3"
      active-color="#DCEDFF"
    />
  </div>
</template>

<script>
import CharacterBlock from "@/components/CharacterBlock.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
export default {
  name: "rick-and-morty-list",
  components: {
    CharacterBlock,
    VPagination,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  created() {
    this.$store.dispatch("fetchCharacter", this.currentPage);
  },
  computed: {
    characters() {
      return this.$store.getters["getCharastersByPage"](this.currentPage);
    },
    firstCharacters() {
      return this.$store.getters["getCharasterById"]({ id: 1, page: 1 });
    },
    pages() {
      return this.$store.state.pages;
    },
  },
  watch: {
    currentPage: {
      handler(page) {
        this.$store.dispatch("fetchCharacter", page);
      },
    },
  },
};
</script>
