import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store/index'
import { HashRouter as Router} from 'react-router-dom'
import App from './App'

test('App render test', () => {
  render(
    <Router>
    <Provider store={store}>
      <App />
    </Provider>
    </Router>
  )
})