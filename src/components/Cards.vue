<template>
  <div id="cards">
    <b-list-group
      v-for="card in item.cards"
      v-bind:key="card.id">
      <card v-bind:card="card" v-bind:listId="item.id"/>
    </b-list-group>
    <div class="d-flex flex-row">
      <b-form-input
        v-model="title"
        placeholder="Add new item ..."
        class="new-item"
        @keydown.enter.native="addItem"/>
      <div class="d-flex flex-row">
        <b-button
          class="valid-input ml-2"
          v-if="title.length"
          v-on:click="addItem"
        >
          <b-icon-check/>
        </b-button>
        <b-button
          class="clear-input ml-2"
          v-if="title.length"
          v-on:click="resetInput"
        >
          <b-icon-x/>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>

import BoardCard from './BoardCard';
import AddButton from './AddButton';
import AddListModal from './AddListModal';
import Card from './Card';

export default {
  name: 'Cards',
  data() {
    return {
      title: '',
    };
  },
  components: { Card, AddListModal, AddButton, BoardCard },
  props: ['item'],
  methods: {
    resetInput() {
      this.title = '';
    },
    addItem() {
      this.$store.commit(
        'addListCard',
        {
          title: this.title,
          boardId: this.$route.params.id,
          listId: this.item.id,
        },
      );
      this.resetInput();
    },
  },
};
</script>

<style scoped>
  .clear-input, .valid-input {
    background: no-repeat;
    border: none;
    outline: none;
  }

  .clear-input {
    color: #000;
  }

  .valid-input {
    color: #17a2b8;
  }

  .new-item {
    border: 0;
    padding: 0;
    color: #17a2b8;
  }
</style>
