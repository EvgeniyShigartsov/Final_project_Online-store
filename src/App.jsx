import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateCustomerPage from './components/CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import { InstaSection } from './components/InstaSection/InstaSection'
import ReviewSlider from './components/ReviewSlider/ReviewSlider'
import ServiceSection from './components/ServiceSection/ServiceSection'
import { AboutUsPage } from './pages/About-us/AboutUs'
import NewProductsSlider from './components/NewProductsSlider/NewProductsSlider'
import Footer from './components/Footer/Footer'
import ContactUsPage from './pages/Contact-us/ContactUs'
import ProductPage from './components/ProductPage/ProductPage'
import Header from './components/Header/Header'
import LogIn from './components/LogIn/LogIn'
import Checkout from './components/Checkout/Checkout'
import {CartPage} from './components/CartPage/CartPage'
import OrderPage from './components/OrderPage/OrderPage'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <BannerSlider />
          <NewProductsSlider />
          <InstaSection />
          <ReviewSlider />
          <ServiceSection />
        </Route>
        <Route exact path="/signin">
          <LogIn />
        </Route>
        <Route exact path="/signup">
          <CreateCustomerPage />
        </Route>
        <Route exact path="/aboutus">
          <AboutUsPage />
          <ServiceSection />
        </Route>
        <Route exact path="/contactus">
          <ContactUsPage />
          <ServiceSection />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
          <ServiceSection />
        </Route>
        <Route exact path="/order">
          <OrderPage />
        </Route>
        <Route exact path="/products/:itemNo">
          <ProductPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
