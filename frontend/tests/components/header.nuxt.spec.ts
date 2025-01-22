import {it, expect, describe} from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Header from '@/components/header.vue'

describe('Header.vue', () => {
    it('renders header', async () => {
        const component = await mountSuspended(Header);
        expect(component).to.exist;
    })

    it('nav links exist', async () => {
        const component = await mountSuspended(Header);
        expect(component.findAll("a[href^='/']")).toHaveLength(3);
    })
    it('svg logo exist', async () => {
        const component = await mountSuspended(Header);
        expect(component.findAll("svg")).exist;
    })
})
