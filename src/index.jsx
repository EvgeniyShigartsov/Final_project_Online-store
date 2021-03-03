import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/es/integration/react';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/reset.css'
import './styles/index.css'
import { store, persistor } from './store/index'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
