import {
  SET_WISHLIST,
  ADD_ONE_PRODUCT_TO_WISHLIST,
  REMOVE_ONE_PRODUCT_FROM_WISHLIST
} from './actionType'

export const setWishlist = () => ({ type: SET_WISHLIST })

export const addOneProductToWishlist = (payload) => ({
  type: ADD_ONE_PRODUCT_TO_WISHLIST,
  payload
})

export const removeOneProducFromWishlist = (payload) => ({
  type: REMOVE_ONE_PRODUCT_FROM_WISHLIST,
  payload
})