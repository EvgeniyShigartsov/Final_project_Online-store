import React from 'react';
// import { shallow } from 'enzyme';
import { render } from '@testing-library/react'

import { HashRouter as Router } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store } from '../../store/index'

import { CatalogComponent } from './Catalog'

describe('Catalog component', () => {
  test('should render Catalog component', () => {
    const CatalogComponentProps = {
      catalogProduct: {
        productsList: [{
          brand: 'AOC',
          categories: 'gamingMonitors',
          color: 'grey',
          currentPrice: 10500,
          date: '2021-03-16T00:22:45.715Z',
          description: 'It’s large, responsive and color-accurate, making it ideal for both everyday computing and competitive gaming. And the price simply can’t be beaten, delivering a massive 31.5in curved panel for the price of a 27in screen',
          enabled: true,
          imageUrls: (4)['https://i1.rozetka.ua/goods/13495213/aoc_cq32g1_images_13495213490.jpg'],
          itemNo: '896750',
          name: 'monitor 31.5 aoc cq32g1',
          newProduct: 'no',
          params: {
            updateFrequency: '144Hz',
            countryOfmanufacture: 'China',
            displayDiagonal: '31.5"',
            displayResolution: '2560 x 1440',
            responseTime: '1ms'
          },
          previousPrice: 0,
          productUrl: '/gamingMonitors',
          quantity: 48,
          reviews: [4, 2, 3, 5, 4, 5, 3, 4, 3, 5, 5, 4, 5, 5],
          v: 0,
          id: '604ffa554e7ef500153393f4'
        }],
        isLoading: false
      }
    }

    const { asFragment } = render(
      <Router>
        <CatalogComponent catalogProduct={CatalogComponentProps} />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})