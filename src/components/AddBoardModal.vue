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
      <form ref="new-board-form" @submit.stop.prevent="handleSubmit">
        <b-form-input
          id="title-input"
          placeholder="Name*"
          v-model="title"
          :state="titleState"
          :class="{ 'hasError': $v.title.$error, 'mb-4': true }"
        />
        <div class="error-label" v-if="$v.title.$error">Name is required</div>

        <b-form-input
          id="description-input"
          placeholder="Description"
          v-model="description"
          :state="descriptionState"
        />
      </form>

      <p class="error-label" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
    </b-modal>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'AddBoardModal',
  data() {
    return {
      title: '',
      description: '',
      submitStatus: null,
    };
  },
  methods: {
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();

      this.handleSubmit();
    },
    resetModal() {
      this.title = '';
      this.titleState = null;
      this.description = '';
      this.descriptionState = null;
    },
    toggleModal() {
      this.$root.$emit('bv::toggle::modal', 'modal-add-board', '#btnToggle');
    },
    handleSubmit() {
      this.$v.$touch();
      if (this.$v.$error || this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        return;
      }

      this.$store.dispatch(
        'addBoard',
        { title: this.title, description: this.description },
      )
        .then((newBoardId) => {
          this.$router.push('/board/:id'.replace(':id', newBoardId));
        });
      this.toggleModal();
    },
  },
  validations: {
    title: {
      required,
      minLength: minLength(3),
    },
  },
};
</script>

<style scoped>
  input.form-control.hasError {
    border-color: red;
  }

  .error-label {
    color: red
  }
</style>
