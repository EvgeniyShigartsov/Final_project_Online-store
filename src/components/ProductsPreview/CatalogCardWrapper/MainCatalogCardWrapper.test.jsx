import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react'

import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../../store/index'

import { CatalogCardWrapper } from './MainCatalogCardWrapper'
import { ProductCard } from '../../ProductCard/ProductCard';

describe('CatalogCardWrapper component', () => {
  const productsListProps = [
    {
      name: 'Name device',
      imageUrls: ['img 1 url', 'img 2 url'],
      reviews: [1, 2, 3, 4],
      quantity: 3,
      previousPrice: 1999,
      currentPrice: 1899,
      itemNo: 'item number'
    },
    {
      name: 'Name device 2',
      imageUrls: ['img 1 url', 'img 2 url', 'img 3 url'],
      reviews: [1, 2, 3, 4, 4],
      quantity: 4,
      previousPrice: 19990,
      currentPrice: 18990,
      itemNo: 'item2 number'
    },
  ]

  let component;
  beforeEach(() => {
    component = shallow(<CatalogCardWrapper productsList={productsListProps} />)
  })

  test('should render CatalogCardWrapper component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <CatalogCardWrapper productsList={productsListProps} />
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