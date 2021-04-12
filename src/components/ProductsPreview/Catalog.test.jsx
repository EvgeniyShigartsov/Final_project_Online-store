import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react'

import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store/index'

import { Catalog } from './Catalog'

describe('Catalog component', () => {
  test('should render Catalog component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Catalog />
        </Router>
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})