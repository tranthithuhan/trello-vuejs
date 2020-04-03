import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const initialState = {
  boards: [
    {
      id: '1',
      title: 'To do',
      img: 'https://picsum.photos/600/300/?image=25',
      description: 'Some quick example text to build on the card title.',
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
      description: 'Some quick example text to build on the card title.',
    },
    {
      id: '3',
      title: 'To do',
      img: 'https://picsum.photos/600/300/?image=1',
      description: 'Some quick example text to build on the card title.',
    },
    {
      id: '4',
      title: 'To do',
      img: 'https://picsum.photos/600/300/?image=2',
      description: 'Some quick example text to build on the card title.',
    },
    {
      id: '5',
      title: 'To do',
      img: 'https://picsum.photos/600/300/?image=26',
      description: 'Some quick example text to build on the card title.',
    },
  ],
};

let state = {}
if (localStorage.getItem('trello-vuejs')) {
  state = JSON.parse(localStorage.getItem('trello-vuejs'));
} else {
  localStorage.setItem('trello-vuejs', JSON.stringify(initialState));
  state = initialState
}

export default new Vuex.Store({
  state: state,
  getters,
  mutations,
  actions,
});
