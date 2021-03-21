import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateCustomerPage from './components/CreateCustomerPage/CreateCustomerPage'
import { BannerSlider } from './components/BannerSlider/BannerSlider'
import { AboutUsPage } from './pages/About-us/AboutUs'
import NewProductsSlider from './components/NewProductsSlider/NewProductsSlider'
import Footer from './components/Footer/Footer'
import ContactUsPage from './pages/Contact-us/ContactUs'
import ProductPage from './components/ProductPage/ProductPage'
import CatalogPage from './components/CatalogPage/CatalogPage'
import Header from './components/Header/Header'
import LogIn from './components/LogIn/LogIn'
import Checkout from './components/Checkout/Checkout'
import DashBoard from './components/DashBoard/DashBoard'
import {CartPage} from './components/CartPage/CartPage'
import OrderPage from './components/OrderPage/OrderPage'
// import { MainCatalog } from './components/MainCatalog/MainCatalog'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <BannerSlider />
          <NewProductsSlider />
          {/* <MainCatalog /> */}
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
        <Route exact path="/contactus">
          <ContactUsPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/order">
          <OrderPage />
        </Route>
        <Route exact path="/products/:itemNo">
          <ProductPage />
        </Route>
        <Route exact path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/catalog">
          <CatalogPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App