<template>
  <div id="board" class="board-card">
    <h2 class="board-title mt-5">{{board.title}}</h2>
    <h4 class="m-4">{{board.description}}</h4>
    <add-button modalId="modal-add-list"/>
    <add-list-modal/>
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
        <cards v-bind:item="item"/>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>

import BoardCard from './BoardCard';
import AddButton from './AddButton';
import AddListModal from './AddListModal';
import Cards from './Cards';

export default {
  name: 'Board',
  components: { Cards, AddListModal, AddButton, BoardCard },
  props: {
    id: String,
  },
  computed: {
    board() {
      return this.$store.getters.getBoardById(this.id);
    },
  },
  methods: {
    resetInput() {
      this.title = '';
      this.titleState = null;
    },
    addItem() {
      console.log(this.$v);
    },
  },
};
</script>

<style scoped>
  .board-item {
    max-width: 30%;
    flex-basis: 30%;
    margin: 10px;
  }
</style>
