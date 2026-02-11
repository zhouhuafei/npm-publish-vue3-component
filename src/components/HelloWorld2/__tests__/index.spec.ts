import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Component from '../index.tsx'

describe('HelloWorld2', () => {
  it('renders properly', () => {
    const wrapper = mount(Component, { props: { msg: 'hello' } })
    expect(wrapper.text()).toContain('hello')
  })
})
