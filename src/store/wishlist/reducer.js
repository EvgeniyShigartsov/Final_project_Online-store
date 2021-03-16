import { SET_WISHLIST } from './actionType'

export const MODULE_NAME = 'wishlist'

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
      
    default:
      return state
  }
}