import { createLocalVue, mount } from 'vue-test-utils';
import Vga from '@/vga/index';

const localVue = createLocalVue();
const customProps = {
  id: 'hellowWorld',
};

describe('Ensure component props behave as expected', () => {
  test('Should have correct user specified data wif given', () => {
    const wrapper = mount(Vga, {
      localVue,
      propsData: customProps,
    });
    expect(wrapper.vm.$props.id).toBe(customProps.id);
  });
});
