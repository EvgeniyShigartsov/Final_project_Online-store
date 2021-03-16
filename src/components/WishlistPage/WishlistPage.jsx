import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Heading from '../common/Heading/Heading'
import { Container } from '../common/Container'
import Wishlist from './Wishlist/Wishlist'

const mapStateToProps = (state) => ({isLogin: state.auth.isLogin})

const WishlistPage = connect(mapStateToProps, null)(({ isLogin }) => {
  if (!isLogin) {
    return <Redirect to="/signin" />
  }
  return (
    <Container>
      <Heading>
        My wishlist
      </Heading>
      <Wishlist />
    </Container>
  )
})
export default WishlistPage