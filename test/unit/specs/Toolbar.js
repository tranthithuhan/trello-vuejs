import { shallowMount } from '@vue/test-utils';
import Toolbar from '../../../src/components/Toolbar.vue';


describe('Toolbar.vue', () => {
  const wrapper = shallowMount(Toolbar);

  it('should render the app title correctly', () => {
    expect(wrapper.find(".app-title").text())
      .toEqual('Task manager');
  });
});
