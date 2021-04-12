/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { render } from '@testing-library/react'
import InputGroup from './InputGroup'

describe('All test for input group', () => {
  const props = {
    inputHandler: () => jest.fn(),
    decreaseHandler: () => jest.fn(),
    increaseHandler: () => jest.fn(),
    quantity: 10
  }

  test('InputGroup shapshot test', () => {
    const { asFragment } = render(<InputGroup {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('check the props value in the input', () => {
    const { getByDisplayValue } = render(<InputGroup {...props} />)
    expect(getByDisplayValue('10')).toBeDefined()
  })
})