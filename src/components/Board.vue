<template>
  <div id="board" class="board-card">
    <h2 class="board-title">{{board.title}}</h2>
    <b-card-group
      deck
      class="board-list d-flex flex-row justify-content-center"
    >
      <b-card
        class="board-item"
        v-for="item in board.list"
        v-bind:header="item.title"
        v-bind:key="item.id"
      >
        <b-list-group
          v-for="card in item.cards"
          v-bind:key="card.id">
          <b-card class="board-list-card">
            {{card.title}}
          </b-card>
        </b-list-group>

      </b-card>
    </b-card-group>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import BoardCard from './BoardCard';

export default {
  name: 'Board',
  components: { BoardCard },
  props: {
    id: String,
  },
  computed: {
    board() {
      return this.$store.getters.getBoardById(this.id);
    },
  },
};
</script>

<style scoped>
  .board-item {
    max-width: 30%;
  }

  .board-list-card {
    margin: 5px 0;
  }

  .board-list-card .card-body {
    padding: 5px;
  }
</style>
