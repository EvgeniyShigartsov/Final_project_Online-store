import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import NewProductsSlider from './NewProductsSlider'
import { store } from '../../store/index'

describe('All test for NewProductsSlider', () => {
  test('NewProductsSlider render test', () => {
    render(
      <Provider store={store}>
        <Router>
          <NewProductsSlider />
        </Router>
      </Provider>
    )
  })
})