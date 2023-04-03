<template>
  <div>
    <div><img :src="character.image" :alt="character.name" /></div>
    <div>
      <span>
        {{ character.name }}
      </span>
      <span> {{ character.status }} - {{ character.species }} </span>
      <span> Last know location: {{ character.location.name }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: `character-block`,
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>
