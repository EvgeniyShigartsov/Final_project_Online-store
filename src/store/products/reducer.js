import { SET_PRODUCTS, ADD_PRODUCT } from './actionType';

const initialState = {
  products: []
}

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload
      }

    case ADD_PRODUCT:
      return {
        ...state,
        products: [payload, ...state.products]
      }
  
    default:
      return state
  }
}

export default reducer