import Vue from 'vue';
import Router from 'vue-router';
import Boards from '../components/Boards';
import Board from '../components/Board';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'boards',
      component: Boards,
    },
    {
      path: '/board/:id',
      name: 'board',
      component: Board,
      props: true,
    },
  ],
});
