<template>
  <b-button class="floating-add-button" ref="btnShow" @click="showModal">
    <b-icon-plus/>
  </b-button>
</template>
<script>
export default {
  name: 'AddButton',
  props: ['modalId'],
  methods: {
    showModal() {
      this.$root.$emit('bv::show::modal', this.$props.modalId, '#btnShow');
    }
  },
};
</script>

<style scoped>
  .floating-add-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #17a2b8;
    border-color: #fff;
  }
</style>
