import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react'

import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../../store/index'

import { CatalogCardWrapper } from './MainCatalogCardWrapper'
import { ProductCard } from '../../ProductCard/ProductCard';
import { productsMock } from '../../../mocks/products';

describe('CatalogCardWrapper component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<CatalogCardWrapper productsList={productsMock} />)
  })

  test('should render CatalogCardWrapper component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <CatalogCardWrapper productsList={productsMock} />
        </Router>
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('should contain CatalogBillboardWrapper', () => {
    const wrapper = component.find(ProductCard)
    expect(wrapper.length).toBeGreaterThan(1)
  })
})