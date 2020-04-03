import { shallowMount, createLocalVue } from '@vue/test-utils';
import { BootstrapVue, BCard } from 'bootstrap-vue';
import BoardCard from '../../../src/components/BoardCard';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('Boards.vue', () => {
  const wrapper = shallowMount(
    BoardCard,
    {
      propsData: {
        board: {
          id: '1',
          title: 'Board 1',
          description: 'this is a description',
        },
        id: '1',
      },
    },
  );

  it('should render correctly', () => {
    expect(wrapper.find('.board-card')
      .exists())
      .toBe(true);

    expect(wrapper.find(BCard).exists())
      .toBe(true);
  });

  it('should render correctly the title', () => {
    expect(wrapper.find(BCard).attributes().title)
      .toBe('Board 1');
  });

  it('should render correctly the board s title', () => {
    expect(wrapper.find(BCard).attributes().title)
      .toBe('Board 1');
  });
});
