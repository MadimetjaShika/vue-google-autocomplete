import { createLocalVue, mount } from 'vue-test-utils';
import Vga from '@/vga/index';

const localVue = createLocalVue();
// localVue.use(VueEvents);
// localVue.use(plugins);

const propData = {
  id: 'input-field-id',
};
let wrapper = null;
beforeEach(() => {
  wrapper = mount(Vga, {
    localVue,
    propsData: propData,
  });
});

describe('Ensure Component is initialised properly', () => {
  test('Is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Component should have correct name', () => {
    expect(wrapper.name()).toBe('vuetify-google-autocomplete');
  });
});
