import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import { message } from 'antd'
import Heading from '../common/Heading/Heading'
import { Container } from '../common/Container'

const mapStateToProps = (state) => ({isLogin: state.auth.isLogin})

const WishlistPage = connect(mapStateToProps, null)(({ isLogin }) => {
  if (!isLogin) {
    // message.info('Please autorizate to see your wishlist.')
    return <Redirect to="/signin" />
  }
  return (
    <Container>
      <Heading>
        My wishlist
      </Heading>
    </Container>
  )
})
export default WishlistPage