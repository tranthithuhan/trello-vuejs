<template>
  <div
    class="board-card mb-4"
    style="max-width: calc(100%/3);">
    <router-link
      v-bind:to="{name: 'board', params: {id} }">
      <b-card
        v-bind:title="board.title"
        v-bind:img-src="board.img"
        img-top
      >
        <b-card-text>
          Some quick example text to build on the card title.
        </b-card-text>
      </b-card>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BoardCard',
  props: ['board', 'id'],
};
</script>

<style scoped>

</style>
