<template>
  <div id="boards" class="boards">
    <b-card-group deck
                  style="justify-content: flex-start;">
      <board-card
        v-for="card in boards"
        v-bind:board="card"
        v-bind:key="card.id"
        v-bind:id="card.id"
      />
    </b-card-group>
  </div>
</template>

<script>
import BoardCard from './BoardCard';

export default {
  name: 'Boards',
  components: { BoardCard },
  computed: {
    boards() {
      return this.$store.state.boards;
    },
  },
};
</script>

<style scoped>

</style>
