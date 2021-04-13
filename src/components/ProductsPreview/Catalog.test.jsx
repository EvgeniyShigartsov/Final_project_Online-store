import React from 'react';
import { render } from '@testing-library/react'

import { HashRouter as Router } from 'react-router-dom'

import { CatalogComponent } from './Catalog'
import { productsMock } from '../../mocks/products';

describe('Catalog component', () => {
  test('should render Catalog component', () => {
    const { asFragment } = render(
      <Router>
        <CatalogComponent
          gamingMonitorList={productsMock}
          desktopList={productsMock}
          laptopList={productsMock}
          tabletList={productsMock}
          isLoading
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})