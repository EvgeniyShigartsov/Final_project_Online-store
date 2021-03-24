import React from 'react';
import { connect } from 'react-redux';
import { Circle, Amount } from './StyledCircleCount'
import { selectWishlistLength } from '../../../store/wishlist/reducer'

const mapStateToProps = (state) => ({
  wishitstLength: selectWishlistLength(state)
})

const CircleCount = connect(mapStateToProps, null)(({wishitstLength}) => (
  <Circle>
    <Amount>{wishitstLength === 0 ? (' ') : (wishitstLength)}</Amount>
  </Circle>
))
export default CircleCount;