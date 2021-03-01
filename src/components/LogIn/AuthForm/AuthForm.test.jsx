import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import AuthForm from './AuthForm'

test('AuthForm render test', () => {
  render(
    <AuthForm />
  )
})