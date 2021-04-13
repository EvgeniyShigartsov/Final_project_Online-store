import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { machMedia } from '../../mocks/matchMedia.mock';
import DashBoard from './DashBoard'
import { productsMock } from '../../mocks/customer';
import { store } from '../../store/index'

describe('DashBoardComponent', () => {
  beforeEach(() => {
    machMedia()
  })
  test('render', () => {
    const {asFragment} = render(
      <Provider store={store}>
        <DashBoard
          customerInfo={productsMock}
          isLoading={() => {}}
        />
      </Provider>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})