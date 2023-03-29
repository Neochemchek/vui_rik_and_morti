<template>
  <div class="home">
    Rick and Morty
    {{ character }}
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
    this.$store.dispatch("fetchcharacter", 1);
  },
  computed: {
    character() {
      return this.$store.state.character;
    },
  },
};
</script>
