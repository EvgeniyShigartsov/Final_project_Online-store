import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import LogIn from './LogIn'

test('LogIn render test', () => {
  render(
    <LogIn />
  )
})