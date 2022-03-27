import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Button1 from '../index.vue'

describe('Button1', () => {
  it('renders properly', () => {
    const wrapper = mount(Button1, { props: { msg: 'hello' } })
    expect(wrapper.text()).toContain('hello')
  })
})
