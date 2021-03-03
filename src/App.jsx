import React from 'react'
import { HomepageBrands } from './components/BrandsAndFollow/HomePageBrands'
import { HomepageFollowUs } from './components/BrandsAndFollow/FollowUsInstagram'
import { NavLink, Route, Switch } from 'react-router-dom'
import CreateCustomerPage from './components/CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import { AboutUsPage } from './pages/About-us/AboutUs'
import { NewProductsSlider } from './components/NewProductsSlider/NewProductsSlider'
import LogIn from './components/LogIn/LogIn'
import StyledButton from './components/common/Buttons/StyledButton'
import { Cart } from './components/CartPage/Cart/Cart'
import ProductPage from './components/ProductPage/ProductPage'

function App() {
  return (
    <div>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/products/720373" style={{ margin: '0 15px', color: 'tomato' }}>Products</NavLink>
      <NavLink to="/buttons">Buttons</NavLink>
      
      <Switch>
        <Route exact path="/">
          <BannerSlider />
          <NewProductsSlider />
          <HomepageBrands />
          <HomepageFollowUs />
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
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products/:productID">
          <ProductPage />
        </Route>
        <Route exact path="/buttons">
          <StyledButton shape="round">Submit</StyledButton>
          <StyledButton size="sm" shape="round">Submit</StyledButton>
          <StyledButton size="xl" shape="round" color="black">Submit</StyledButton>
          <StyledButton size="lg" shape="round">Submit</StyledButton>
          <StyledButton size="md" shape="round" color="borderGrey">Submit</StyledButton>
          <StyledButton size="xs" shape="round" color="borderBlue">Submit</StyledButton>
          <StyledButton size="sm" shape="round" color="yellow">Submit</StyledButton>
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
}

export default App
