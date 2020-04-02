import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    boards: [
      {
        id: '1',
        title: 'To do',
        img: 'https://picsum.photos/600/300/?image=25',
        description: '',
        list: [
          {
            id: '1',
            title: 'To learn',
            cards: [
              {
                id: '1',
                title: 'VueJs',
              },
              {
                id: '2',
                title: 'Vuex',
              },
            ],
          },
          {
            id: '2',
            title: 'To buy',
            cards: [
              {
                id: '1',
                title: 'books',
              },
            ],
          },
          {
            id: '3',
            title: 'To buy',
            cards: [
              {
                id: '1',
                title: 'books',
              },
            ],
          },
        ],
      },
      {
        id: '2',
        title: 'Travel Packing Checklist',
        img: 'https://picsum.photos/600/300/?image=24',
        description: '',
      },
      {
        id: '3',
        title: 'To do',
        img: 'https://picsum.photos/600/300/?image=1',
        description: '',
      },
      {
        id: '4',
        title: 'To do',
        img: 'https://picsum.photos/600/300/?image=2',
        description: '',
      },
      {
        id: '5',
        title: 'To do',
        img: 'https://picsum.photos/600/300/?image=26',
        description: '',
      },
    ],
  },
  getters,
  mutations,
  actions,
});
