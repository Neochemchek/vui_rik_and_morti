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
  </div>
</template>

<script>
import CharacterBlock from "@/components/CharacterBlock.vue";
export default {
  name: "rick-and-morty-list",
  components: {
    CharacterBlock,
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
  },
  firstCharacters() {
    return this.$store.getters["getCharasterById"]({ id: 1, page: 1 });
  },
};
</script>
