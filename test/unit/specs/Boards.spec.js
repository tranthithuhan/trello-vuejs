import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue } from 'bootstrap-vue';
import Boards from '../../../src/components/Boards';

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
      },
      {
        id: '2',
        title: 'Board 2',
        description: 'this is a description',
      },
    ],
  },
});

describe('Boards.vue', () => {
  const wrapper = mount(
    Boards,
    { store, localVue },
  );

  it('should render correctly', () => {
    expect(wrapper.find('.boards').exists()).toBe(true);
  });

  it('should render 2 boards', () => {
    expect(wrapper.findAll({ name: 'board-card' }).length).toBe(2);
  });
});
