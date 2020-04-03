import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import Board from '../../../src/components/Board';
import getters from '../../../src/store/getters';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);


const store = new Vuex.Store({
  state: {
    boards: [
      {
        id: '1',
        title: 'Board 1',
        description: 'this is a description',
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
                title: 'books'
              }
            ]
          },
          {
            id: '3',
            title: 'To buy',
            cards: [
              {
                id: '1',
                title: 'books'
              }
            ]
          },
        ]
      },
      {
        id: '2',
        title: 'Board 2',
        description: 'this is a description',
      },
    ],
  },
  getters,
});


describe('Board.vue', () => {
  const wrapper = mount(
    Board,
    {
      propsData: {
        id: '1',
      },
      store,
      localVue,
    },
  );

  it('should render correctly', () => {
    expect(wrapper.find('.board-card')
      .exists())
      .toBe(true);
  });

  it('should render board title correctly', () => {
    wrapper.attributes();
    expect(wrapper.find('h2')
      .exists())
      .toBe(true);
    expect(wrapper.find('h2')
      .text())
      .toBe('Board 1');
  });

  it('should render 3 list item', () => {
    wrapper.attributes();
    expect(wrapper.findAll('.board-item')
      .length)
      .toBe(3);
  });

  it('should render 4 list card', () => {
    wrapper.attributes();
    expect(wrapper.findAll('.board-list-card')
      .length)
      .toBe(4);
  });
});
