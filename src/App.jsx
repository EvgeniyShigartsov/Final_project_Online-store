import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LogIn from './components/LogIn/LogIn'
import Checkout from './components/Checkout/Checkout'
import DashBoard from './components/DashBoard/DashBoard'
import WishlistPage from './components/WishlistPage/WishlistPage'
import { setWishlist } from './store/wishlist/middleware'
import { getCart } from './store/cart/middleware'
import ProductSubscribeModal from './components/ProductSubscribeModal/ProductSubscribeModal'
import Router from './components/Router/Router'
import {authLogIn} from './store/auth/middleware'
import { setRefreshTimer } from './store/auth/actionCreator'

const App = connect(null, { authLogIn, setRefreshTimer, setWishlist})(({
  authLogIn,
  setWishlist,
  setRefreshTimer
}) => {
  useEffect(() => {
    setWishlist()

    if (localStorage.getItem('credentials')) {
      setRefreshTimer(setInterval(() => {
        authLogIn(JSON.parse(localStorage.getItem('credentials')))
      }, 1800000))
    }
  }, [authLogIn, setRefreshTimer, setWishlist])

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
        <Route exact path="/wishlist">
          <WishlistPage />
        </Route>
        <Route exact path="/catalog">
          <CatalogPage />
        </Route>
      </Switch>
      <ProductSubscribeModal />
      <Router />
      <Footer />
    </div>
  );
})

export default App