import React from 'react'
import { mount } from 'enzyme'
import App from './index'

it('renders without crashing', () => {
  const wrapper = mount(<App />)
  expect(wrapper.text().indexOf('todo') > -1).toBeTruthy()
})

describe('renders some items', () => {
  const items = [
    {
      id: '1',
      title: 'foo item'
    },
    {
      id: '2',
      title: 'other item'
    },
    {
      id: '3',
      title: 'one more item'
    }
  ]

  const wrapper = mount(<App items={items} />)

  items.forEach(({ title }, k) => {
    it(`should pass case ${k}`, () => {
      expect(wrapper.text().indexOf(title) > -1).toBeTruthy()
    })
  })
})
