/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { WishlistBox, WishlistItem } from './StylesWishlist';
import { setWishlist, addProductToWishlist, removeProductFromWishlist } from '../../../store/wishlist/middleware'
import { selectWishlistItems } from '../../../store/wishlist/reducer'

const mapStateToProps = (state) => ({ wishlist: selectWishlistItems(state) })

const Wishlist = connect(mapStateToProps, {
  setWishlist,
  addProductToWishlist,
  removeProductFromWishlist
})(({
  wishlist,
  setWishlist,
  addProductToWishlist,
  removeProductFromWishlist
}) => {
  useEffect(() => {
    setWishlist()
  }, [setWishlist])
  const items = wishlist.map((item, i) => (
    <WishlistItem key={i}>
      someItem
    </WishlistItem>
  ))
  console.log(wishlist)

  return (
    <WishlistBox>
      <button onClick={() => addProductToWishlist('603ced9be8326900152cfcf6')} type="button">ADD FIRST</button>
      <button onClick={() => addProductToWishlist('604ffa554e7ef500153393f4')} type="button">ADD SECOND</button>
      <button onClick={() => addProductToWishlist('604ffa554e7ef500153393f5')} type="button">ADD THIRD</button>
      <button onClick={() => removeProductFromWishlist('603ced9be8326900152cfcf6')} type="button">DELETE FIRST</button>
      <button onClick={() => removeProductFromWishlist('604ffa554e7ef500153393f4')} type="button">DELETE SECOND </button>
      <button onClick={() => removeProductFromWishlist('604ffa554e7ef500153393f5')} type="button">DELETE THIRD</button>

      {items.length ? items : <div>Wishlist is empty now</div>}
    </WishlistBox>
  )
})
export default Wishlist