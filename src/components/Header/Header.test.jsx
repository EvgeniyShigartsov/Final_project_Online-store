import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import fireEvent from '@testing-library/user-event';
import {
  DownOutlined,
  MenuOutlined,
  UserOutlined

} from '@ant-design/icons';
import Header from './Header';
import PopUpShedulteContainer from './PopUpShadule/PopUpShedulteContainer';

import { store } from '../../store/index';
import UserPopUp from './UserPopUp/UserPopUp';
import PopUpList from './PopUpList/PopUpList';

describe('Test Header', () => {
  test('Header filter render test', () => {
    render(<Provider store={store}><Router><Header /></Router></Provider>)
  })
})
describe('Shedule component test for Header', () => {
  test('Shedule', () => {
    render(
      <Provider store={store}>
        <Router>
          <PopUpShedulteContainer
            isOpenSheduleMenu
            setisOpenSheduleMenu={() => { }}
          />
        </Router>
      </Provider>
    )
  })
})
describe('PopUpList components test for Header', () => {
  test('PopUpList', () => {
    render(
      <Provider store={store}>
        <Router>
          <PopUpList
            openSlide={{ }}
            isOpen
            openCloseMenu={() => { }}
            setIsOpen={() => { }}
            hideList
            checkForLinkOpen={() => { }}
          />
        </Router>
      </Provider>
    )
  })
  test('PopUpList button is defined', () => {
    const {getByText} = render(
      <Provider store={store}>
        <Router>
          <PopUpList
            openSlide={{ }}
            isOpen
            openCloseMenu={() => { }}
            setIsOpen={() => { }}
            hideList
            checkForLinkOpen={() => { }}
          />
        </Router>
      </Provider>
    )
    expect(getByText('Our Deals')).toBeDefined()
  })
})
describe('UserPopUp components test for Header', () => {
  test('UserPopUp', () => {
    render(
      <Provider store={store}>
        <Router>
          <UserPopUp
            isOpenUser
            setIsOpenUser={() => { }}
            isLogin
            authLogOut={() => { }}
          />
        </Router>
      </Provider>
    )
  })
  test('UserPopUp closeImg', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Router>
          <UserPopUp
            isOpenUser
            setIsOpenUser={() => { }}
            isLogin
            authLogOut={() => { }}
          />
        </Router>
      </Provider>
    )
    expect(getByTestId('closeImg')).toBeDefined()
  })
})
describe('Events', () => {
  test('Click shadule', () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(
      <Provider store={store}><Router><DownOutlined data-testid="arrowDownShedule" onClick={handleChange} /></Router></Provider>
    )
    const arrowDown = getByTestId('arrowDownShedule')
    expect(handleChange).not.toHaveBeenCalled()
    expect(getByTestId('arrowDownShedule')).toBeInTheDocument()
    fireEvent.click(arrowDown)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
  test('Click burger', () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <MenuOutlined
            data-testid="burger"
            onClick={handleChange}
          />
        </Router>
      </Provider>
    )
    const burgerCall = getByTestId('burger')
    expect(handleChange).not.toHaveBeenCalled()
    expect(getByTestId('burger')).toBeInTheDocument()
    fireEvent.click(burgerCall)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
  test('Click user', () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <UserOutlined
            data-testid="userBtn"
            onClick={handleChange}
          />
        </Router>
      </Provider>
    )
    const burgerCall = getByTestId('userBtn')
    expect(handleChange).not.toHaveBeenCalled()
    expect(getByTestId('userBtn')).toBeInTheDocument()
    fireEvent.click(burgerCall)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(getByTestId('userBtn')).toBeDefined()
  })
})