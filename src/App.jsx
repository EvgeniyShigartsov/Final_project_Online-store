import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import { setWishlist } from './store/wishlist/middleware'
import ProductSubscribeModal from './components/ProductSubscribeModal/ProductSubscribeModal'
import Router from './components/Router/Router'
import {authLogIn} from './store/auth/middleware'
import { setRefreshTimer } from './store/auth/actionCreator'
import { getCart } from './store/cart/middleware'
import ServiceSection from './components/ServiceSection/ServiceSection'
import AuthModal from './components/AuthModal/AuthModal'
import { headerHeight } from './utils/constants'

const App = connect(null, {
  authLogIn, setRefreshTimer, setWishlist, getCart
})(({
  authLogIn,
  setWishlist,
  setRefreshTimer,
  getCart
}) => {
  useEffect(() => {
    setWishlist()
    getCart()

    if (localStorage.getItem('credentials')) {
      authLogIn(JSON.parse(localStorage.getItem('credentials')))
      setRefreshTimer(setInterval(() => {
        authLogIn(JSON.parse(localStorage.getItem('credentials')))
      }, 1800000))
    }
  }, [authLogIn, getCart, setRefreshTimer, setWishlist])

  return (
    <div style={{marginTop: headerHeight}}>
      <Header />
      <ProductSubscribeModal />
      <AuthModal />
      <Router />
      <ServiceSection />
      <Footer />
    </div>
  );
})

export default App