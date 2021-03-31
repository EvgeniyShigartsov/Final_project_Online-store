import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectWishlistItems } from '../../../store/wishlist/reducer'
import {StyledLiked, Circle, Amount} from './StyledWishListComponent'

const mapStateToProps = (state) => ({wishlist: selectWishlistItems(state)})

const WishListComponent = connect(mapStateToProps, null)(({wishlist}) => (
  <Link to="/wishlist" style={{outline: 'none', position: 'relative'}}>
    <StyledLiked
      width={25}
      height={22}
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.68513 2.82536L8.39535 3.54187L9.10557 2.82536C9.77879 2.14617 10.8139 1.375 11.8922 1.375C12.9606 1.375 13.8026 1.73075 14.3714 2.278C14.9374 2.82255 15.2936 3.61414 15.2936 4.60948C15.2936 5.68046 14.8643 6.59251 14.1287 7.47611C13.3739 8.3829 12.3563 9.19134 11.2509 10.0643L11.2252 10.0846C10.2883 10.8241 9.24578 11.647 8.39584 12.5675C7.55422 11.655 6.52157 10.8387 5.59303 10.1047L5.54239 10.0646L5.54198 10.0643C4.43628 9.19109 3.4189 8.38246 2.66433 7.47571C1.92905 6.59215 1.5 5.68023 1.5 4.60948C1.5 3.61414 1.8562 2.82257 2.42223 2.27804C2.99108 1.73079 3.83327 1.375 4.9021 1.375C5.97913 1.375 7.01114 2.14538 7.68513 2.82536Z" />
    </StyledLiked>
    {!!wishlist.length && (
      <Circle>
        <Amount>{wishlist.length}</Amount>
      </Circle>
    )}
  </Link>
))

WishListComponent.propTypes = {
  wishlistLength: PropTypes.number
}

export default WishListComponent