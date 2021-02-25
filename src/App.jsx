import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import CreateCustomerPage from './components/CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import { NewProductsSlider } from './components/NewProductsSlider/NewProductsSlider'

function App() {
  return (
    <div>
      <NavLink to="/" style={{margin: '15px'}}>Homepage</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <div style={{ margin: 15}} />
      <Switch>

        <Route exact path="/">
          <BannerSlider />
          <NewProductsSlider />
        </Route>
        <Route exact path="/signup">
          <CreateCustomerPage />
        </Route>
      
      </Switch>
    </div>
  )
}

export default App
