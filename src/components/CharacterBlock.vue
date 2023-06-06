<template>
  <div>
    <div class="character-block_image">
      <div><img :src="character.image" :alt="character.name" /></div>
      <div class="character-block_info">
        <span>
          {{ character.name }}
        </span>
        <span> {{ character.status }} - {{ character.species }} </span>
        <span> Last know location: {{ character.location.name }} </span>
      </div>
    </div>
    <div class="overflow-auto">
      <div>
        <h6>Small</h6>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          size="sm"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { mapState } from "vuex";

export default {
  name: `character-block`,
  props: {
    character: {
      type: Object,
      required: true,
    },
  },

  computed: mapState([
    // map this.count to store.state.count
    console.log("3333", store),
  ]),
};
</script>
