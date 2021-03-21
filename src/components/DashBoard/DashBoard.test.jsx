import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import fireEvent from '@testing-library/user-event';
import { store } from '../../store/index';
import DashBoard from './DashBoard';

describe('Render DashBoard component', () => {
  test('DashBoard', () => {
    render(
      <Provider store={store}>
        <Router>
          <DashBoard />
        </Router>
      </Provider>
    )
  })
//   test('Edit button appears in DashBoard component', () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <Router>
//           <DashBoard />
//         </Router>
//       </Provider>
//     )
//     expect(getByText('Edit')).toBeInTheDocument()
//     await waitFor(() => {
//       expect(getByText('Edit')).toBeInTheDocument()
//     })
//     waitFor()
//   })
})