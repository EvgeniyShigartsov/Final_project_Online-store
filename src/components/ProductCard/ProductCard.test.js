import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ProductCard from './ProductCard'


test('ProductCard render test', () => {
  render(
    <ProductCard />
  )
})