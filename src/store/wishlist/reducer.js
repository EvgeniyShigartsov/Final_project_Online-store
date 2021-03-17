import { SET_WISHLIST, ADD_PRODUCT_TO_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST } from './actionType'

export const MODULE_NAME = 'wishlist'
export const selectWishlistItems = (state) => state[MODULE_NAME].wishitstItems
export const selectWishlistLength = (state) => state[MODULE_NAME].wishitstLength

const initialState = {
  wishitstItems: [],
  wishitstLength: 0
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_WISHLIST:
      return {
        ...state,
        wishitstItems: payload.wishitstItems,
        wishitstLength: payload.wishitstLength
      }
    case ADD_PRODUCT_TO_WISHLIST:
      return {
        ...state,
        wishitstItems: payload.wishitstItems,
        wishitstLength: payload.wishitstLength
      }
    case REMOVE_PRODUCT_FROM_WISHLIST:
      return {
        ...state,
        wishitstItems: payload.wishitstItems,
        wishitstLength: payload.wishitstLength
      }
    default:
      return state
  }
}