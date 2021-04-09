import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD:src/components/DashBoard/PasswordInfoChange/PasswordInfoChange.test.jsx
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { store } from '../../../store/index';
=======
import { shallow } from 'enzyme';
import { store } from '../../store/index';
>>>>>>> 15851fbf4c7e93355ce76acf0299d54af0c91506:src/components/DashBoard/PasswordInfoChange.test.jsx
import PasswordInfoChange from './PasswordInfoChange';

describe('Test for PasswordInfoChange component', () => {
  test('PasswordInfoChange component', () => {
    render(
      <Provider store={store}>
        <Router>
          <PasswordInfoChange
            setShowModal={() => { }}
            info={[{ }]}
            setInfo={() => { }}
          />
        </Router>
      </Provider>
    )
  })
  test('check if button Edit is exists', () => {
    const results = shallow(
      <Provider store={store}>
        <Router>
          <PasswordInfoChange
            setShowModal={() => { }}
            info={[{ }]}
            setInfo={() => { }}
          />
        </Router>
      </Provider>,
      true
    )
    expect(results.text().includes('Edit')).toBeDefined()
  })
  test('check if button change password is exists', () => {
    const results = shallow(
      <Provider store={store}>
        <Router>
          <PasswordInfoChange
            setShowModal={() => { }}
            info={[{ }]}
            setInfo={() => { }}
          />
        </Router>
      </Provider>,
      true
    )
    expect(results.text().includes('Change Password')).toBeDefined()
  })
})
