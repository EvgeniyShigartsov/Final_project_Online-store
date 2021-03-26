import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { setWishlist } from './store/wishlist/middleware'
import ProductSubscribeModal from './components/ProductSubscribeModal/ProductSubscribeModal'
import Router from './components/Router/Router'

const App = connect(null, { setWishlist})(({ setWishlist }) => {
  useEffect(() => {
    setWishlist()
  }, [setWishlist])

  return (
    <div>
      <Header />
      <ProductSubscribeModal />
      <Router />
      <Footer />
    </div>
  )
})

export default App