import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ContentWrapper from './ContentWrapper'

test('ContentWrapper render test', () => {
  render(
    <ContentWrapper />
  )
})