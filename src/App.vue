<template>
  <div id="app">
    <Toolbar/>
    <router-view/>
    <add-button modalId="modal-add-board"/>
    <add-board-modal/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar';
import AddButton from './components/AddButton';
import AddBoardModal from './components/AddBoardModal';

export default {
  name: 'App',
  components: { AddBoardModal, AddButton, Toolbar },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
