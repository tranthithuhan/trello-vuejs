<template>
  <div>
    <b-modal
      id="modal-add-list"
      ref="modal"
      title="New List"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="new-list-form" @submit.stop.prevent="handleSubmit">
        <b-form-input
          id="title-input"
          placeholder="Name*"
          v-model="title"
          :state="titleState"
          :class="{ 'hasError': $v.title.$error, 'mb-4': true }"
        />
        <div class="error-label" v-if="$v.title.$error">Name is required</div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'AddListModal',
  data() {
    return {
      title: '',
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
    },
    toggleModal() {
      this.$bvModal.hide('modal-add-list');
    },
    handleSubmit() {
      this.$v.$touch();
      if (this.$v.$error || this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        return;
      }

      this.$store.commit('addList', { title: this.title, boardId: this.$route.params.id });

      this.$nextTick(() => {
        this.toggleModal();
      });
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
