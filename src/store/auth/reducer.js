import { GET_PRODUCTS } from './actionType';

const initialState = {
  products: []
}

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload
      }
    
    default:
      return state
  }
}

export default reducer