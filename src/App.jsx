import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import CreateCustomerPage from './components/CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import {AboutUsPage} from './pages/About-us/AboutUs'
import { NewProductsSlider } from './components/NewProductsSlider/NewProductsSlider'

function App() {
  return (
    <div>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <Switch>
        <Route exact path="/">
          <BannerSlider />
          <NewProductsSlider />
        </Route>
        <Route exact path="/signup">
          <CreateCustomerPage />
        </Route>
        <Route exact path="/aboutus">
          <AboutUsPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
