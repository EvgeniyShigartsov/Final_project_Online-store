import React from 'react';
// import { shallow } from 'enzyme';
import { render } from '@testing-library/react'

import { HashRouter as Router } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store } from '../../store/index'

import { CatalogComponent } from './Catalog'
import { productsMock } from '../../mocks/products';

describe('Catalog component', () => {
  test('should render Catalog component', () => {
    const CatalogComponentProps = {
      product: [productsMock],
      isLoading: true
    }
    const { asFragment } = render(
      <Router>
        <CatalogComponent catalogProduct={CatalogComponentProps} />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})