import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import fireEvent from '@testing-library/user-event';
import {
  DownOutlined
} from '@ant-design/icons';
import Header from './Header';
import PopUpShedulteContainer from './PopUpShadule/PopUpShedulteContainer';
import PopUpList from './PopUpList/PopUpList';
import { store } from '../../store/index';
import UserPopUp from './UserPopUp/UserPopUp';

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
    fireEvent.click(arrowDown)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
  test('Click burger', () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <PopUpList
            data-testid="popuplist"
            onClick={handleChange}
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
    const burgerCall = getByTestId('popuplist')
    expect(handleChange).not.toHaveBeenCalled()
    fireEvent.click(burgerCall)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })
})