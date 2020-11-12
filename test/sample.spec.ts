import { mount } from '@vue/test-utils';

import Simple from '~/components/Simple.vue';
import { Department } from '~/model/Department';

describe('Sample', () => {
    test('1st', () => {
        expect(2 + 2).toBe(4);
    });

    test('2nd', () => {
        const dep = new Department('DP1');
        expect(dep.name).toBe('DP1');
    });

    test('3rd', () => {
        const wrapper = mount(Simple);
        expect(wrapper.vm).toBeTruthy();
    });
});
