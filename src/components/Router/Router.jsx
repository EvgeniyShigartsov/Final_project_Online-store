import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateCustomerPage from '../CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from '../BannerSlider/BannerSlider'
import { AboutUsPage } from '../About-us/AboutUs'
import NewProductsSlider from '../NewProductsSlider/NewProductsSlider'
import ContactUsPage from '../Contact-us/ContactUs'
import ProductPage from '../ProductPage/ProductPage'
import { HomepageBrands } from '../BrandsAndFollow/HomePageBrands'
import { HomepageFollowUs } from '../BrandsAndFollow/FollowUsInstagram'
import CatalogPage from '../CatalogPage/CatalogPage'
import LogIn from '../LogIn/LogIn'
import Checkout from '../Checkout/Checkout'
import WishlistPage from '../WishlistPage/WishlistPage'
import {CartPage} from '../CartPage/CartPage'
import OrderPage from '../OrderPage/OrderPage'
import NoMatchPage from '../NoMatchPage/NoMatchPage'
import { Catalog } from '../MainCatalog/Catalog'
import ReviewSlider from '../ReviewSlider/ReviewSlider'
import ServiceSection from '../ServiceSection/ServiceSection'

const Router = () => (
  <Switch>
    <Route exact path="/">
      <BannerSlider />
      <NewProductsSlider />
      <Catalog />
      <HomepageBrands />
      <HomepageFollowUs />
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
      <ServiceSection />
    </Route>
    <Route exact path="/products/:itemNo">
      <ProductPage />
      <ServiceSection />
    </Route>
    <Route exact path="/wishlist">
      <WishlistPage />
      <ServiceSection />
    </Route>
    <Route exact path="/catalog">
      <CatalogPage />
      <ServiceSection />
    </Route>
    <Route>
      <NoMatchPage />
    </Route>
  </Switch>
)
export default Router