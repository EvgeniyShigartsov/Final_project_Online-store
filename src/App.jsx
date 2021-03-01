import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import CreateCustomerPage from './components/CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import {Cart} from './components/CartPage/Cart/Cart'
import StyledButton from './components/common/Buttons/StyledButton'
import {AboutUsPage} from './pages/About-us/AboutUs'
import { NewProductsSlider } from './components/NewProductsSlider/NewProductsSlider'
import LogIn from './components/LogIn/LogIn'

const App = () => (
  <div>
    <NavLink to="/">Homepage</NavLink>
    <NavLink to="/signup">Sign Up</NavLink>
    <NavLink to="/signin">Sign In</NavLink>
    <NavLink to="/aboutus">About Us</NavLink>
    <Switch>
      <Route exact path="/">
        <BannerSlider />
        <NewProductsSlider />
      </Route>
      <Route exact path="/signin">
        <LogIn />
      </Route>
      <Route exact path="/signup">
        <CreateCustomerPage />
      </Route>
      <Route exact path="/aboutus">
        <AboutUsPage />
      </Route>
    </Switch>
    <StyledButton shape="round">Submit</StyledButton>
    <StyledButton size="sm" shape="round">Submit</StyledButton>
    <StyledButton size="xl" shape="round" color="black">Submit</StyledButton>
    <StyledButton size="lg" shape="round">Submit</StyledButton>
    <StyledButton size="md" shape="round" color="borderGrey">Submit</StyledButton>
    <StyledButton size="xs" shape="round" color="borderBlue">Submit</StyledButton>
    <StyledButton size="sm" shape="round" color="yellow">Submit</StyledButton>
    <Cart />
  </div>
)

export default App
