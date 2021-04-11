import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import { setWishlist } from './store/wishlist/middleware'
import ProductSubscribeModal from './components/ProductSubscribeModal/ProductSubscribeModal'
import Router from './components/Router/Router'
import { getCart } from './store/cart/middleware'
import ServiceSection from './components/ServiceSection/ServiceSection'
import AuthModal from './components/AuthModal/AuthModal'
import { getMainCatalogProducts } from './store/productsPreview/middleware'
import StyledAppWrapper from './components/AppWrapper/StyledAppWrapper'
import { getCustomer, getOrders } from './store/customer/middleware'

const App = connect(null, {
  setWishlist, getCart, getMainCatalogProducts, getCustomer, getOrders
})((
  {
    setWishlist,
    getCart,
    getMainCatalogProducts,
    getCustomer,
    getOrders
  }
) => {
  useEffect(() => {
    getMainCatalogProducts()
    getCart()
    setWishlist()
    getCustomer()
    getOrders()
  }, [getCart, getCustomer, getMainCatalogProducts, getOrders, setWishlist])

  return (
    <StyledAppWrapper>
      <Header />
      <ProductSubscribeModal />
      <AuthModal />
      <Router />
      <ServiceSection />
      <Footer />
    </StyledAppWrapper>
  );
})

export default App