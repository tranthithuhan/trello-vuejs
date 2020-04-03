<template>
  <div id="card">
    <b-card class="board-list-card">
      <div class="d-flex justify-content-between align-items-center">
        <div>{{card.title}}</div>
        <b-button
          class="delete-item ml-2"
          v-on:click="deleteItem"
        >
          <b-icon-x/>
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: ['card', 'listId'],
  methods: {
    deleteItem() {
      this.$store.commit(
        'deleteListCard',
        {
          boardId: this.$route.params.id,
          listId: this.listId,
          cardId: this.card.id,
        },
      );
    },
  },
};
</script>

<style scoped>
  .board-list-card {
    margin: 5px 0;
  }

  .board-list-card .card-body {
    padding: 5px;
  }

 .delete-item {
    background: no-repeat;
    border: none;
    outline: none;
  }

  .delete-item {
    color: #000;
  }
</style>
