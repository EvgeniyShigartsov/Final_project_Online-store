/* eslint-disable padded-blocks */
/* eslint-disable no-unused-vars */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { store } from '../../store/index'
import ProductPage from './ProductPage'

describe('All tests for Product page', () => {

  test('Product Page render test', () => {
    render(
      <Provider store={store}>
        <Router>
          <ProductPage />
        </Router>
      </Provider>
    )
  })
})