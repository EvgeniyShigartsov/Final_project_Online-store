import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import CreateCustomerPage from './components/CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import ReviewSlider from './components/ReviewSlider/ReviewSlider'
import ServiceSection from './components/ServiceSection/ServiceSection'
import { AboutUsPage } from './pages/About-us/AboutUs'
import NewProductsSlider from './components/NewProductsSlider/NewProductsSlider'
import Footer from './components/Footer/Footer'
import ContactUsPage from './pages/Contact-us/ContactUs'
import ProductPage from './components/ProductPage/ProductPage'
import { HomepageBrands } from './components/BrandsAndFollow/HomePageBrands'
import { HomepageFollowUs } from './components/BrandsAndFollow/FollowUsInstagram'
import CatalogPage from './components/CatalogPage/CatalogPage'
import Header from './components/Header/Header'
import LogIn from './components/LogIn/LogIn'
import Checkout from './components/Checkout/Checkout'
import WishlistPage from './components/WishlistPage/WishlistPage'
import { setWishlist } from './store/wishlist/middleware'
import {CartPage} from './components/CartPage/CartPage'
import OrderPage from './components/OrderPage/OrderPage'

const App = connect(null, { setWishlist})(({ setWishlist}) => {
  window.addEventListener('DOMContentLoaded', () => {
    setWishlist()
  })

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <BannerSlider />
          <NewProductsSlider />
          <HomepageBrands />
          <HomepageFollowUs />
          {/* <MainCatalog /> */}
          <ReviewSlider />
          <ServiceSection />
        </Route>
        <Route exact path="/signin">
          <LogIn />
          <ServiceSection />
        </Route>
        <Route exact path="/signup">
          <CreateCustomerPage />
          <ServiceSection />
        </Route>
        <Route exact path="/aboutus">
          <AboutUsPage />
          <ReviewSlider />
          <ServiceSection />
        </Route>
        <Route exact path="/contactus">
          <ContactUsPage />
          <ServiceSection />
        </Route>
        <Route exact path="/cart">
          <CartPage />
          <ServiceSection />
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
        <Route exact path="/wishlist">
          <WishlistPage />
          <ServiceSection />
        </Route>
        <Route path="/catalog">
          <CatalogPage />
          <ServiceSection />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
})

export default App