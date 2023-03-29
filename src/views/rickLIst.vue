<template>
  <div class="home">
    Rick and Morty
    {{ characters }}
    <Char_block></Char_block>
  </div>
</template>

<script>
import Char_block from "@/components/Char_block.vue";

export default {
  name: "rickLIst",
  components: {
    Char_block,
  },
  created() {
    this.$store.dispatch("fetchCharacter", 1);
  },
  computed: {
    characters() {
      return this.$store.state.characters;
    },
  },
};
</script>
