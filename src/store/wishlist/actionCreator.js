import {
  SET_WISHLIST,
  ADD_PRODUCT_TO_WISHLIST,
  REMOVE_PRODUCT_FROM_WISHLIST
} from './actionType'

export const setWishlistCreator = (payload) => ({
  type: SET_WISHLIST,
  payload
})

export const addProductToWishlistCreator = (payload) => ({
  type: ADD_PRODUCT_TO_WISHLIST,
  payload
})

export const removeProducFromWishlistCreator = (payload) => ({
  type: REMOVE_PRODUCT_FROM_WISHLIST,
  payload
})