import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld1 from '../index.vue'

describe('HelloWorld1', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld1, { props: { msg: 'HelloWorld1' } })
    expect(wrapper.text()).toContain('HelloWorld1')
  })
})
