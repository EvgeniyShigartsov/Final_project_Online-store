import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ToSignUp from './ToSignUp'

test('ToSignUp render test', () => {
  render(
    <ToSignUp />
  )
})