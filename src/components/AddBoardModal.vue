<template>
  <div>
    <b-modal
      id="modal-add-board"
      ref="modal"
      title="New board"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-input
          id="name-input"
          placeholder="Name"
          v-model="name"
          :state="nameState"
          required
        />
        <b-form-input
          id="description-input"
          placeholder="Description"
          v-model="description"
          :state="descriptionState"
          required
        />
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'AddBoardModal',
  methods: {
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();

      this.handleSubmit();
    },
    toggleModal() {
      this.$root.$emit('bv::toggle::modal', 'modal-add-board', '#btnToggle');
    },
    handleSubmit() {
      this.$store.commit('addBoard', { name: this.name, description: this.description });

      this.$nextTick(() => {
        this.toggleModal();
      });
    },
  },
};
</script>

<style scoped>

</style>
