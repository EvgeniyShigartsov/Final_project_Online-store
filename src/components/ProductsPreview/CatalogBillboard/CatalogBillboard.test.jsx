import React from 'react';
import { HashRouter as Router } from 'react-router-dom'

import { shallow } from 'enzyme';
import { render } from '@testing-library/react'

import {CatalogBillboard} from './CatalogBillboard';
import { CatalogBillboardWrapper, CatalogBillboardLink, CatalogBillboardTitle } from './StyledCatalogBillboard';

describe('CatalogBillboard component', () => {
  const billBoardProps = {
    title: 'gaming monitors',
    img: 'https://fuzzmusic.ru/wp-content/uploads/2020/08/pesni-iz-igry-kiberpank-2077-1.jpg',
    url: '/catalog?categories=gamingMonitors',
    category: 'gaming monitors'
  }

  const setUp = () => shallow(<CatalogBillboard billboardInfo={billBoardProps} />)

  let component;
  beforeEach(() => {
    component = setUp()
  })

  test('should render CatalogBillboard component', () => {
    const { asFragment } = render(
      <Router>
        <CatalogBillboard billboardInfo={billBoardProps} />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('should contain CatalogBillboardWrapper', () => {
    const wrapper = component.find(CatalogBillboardWrapper)
    expect(wrapper.length).toBe(1)
  })

  test('should contain CatalogBillboardTitle', () => {
    const wrapper = component.find(CatalogBillboardTitle)
    expect(wrapper.length).toBe(1)
  })

  test('should render CatalogBillboardLink', () => {
    const link = component.find(CatalogBillboardLink)
    expect(link.length).toBe(1)
  })
})