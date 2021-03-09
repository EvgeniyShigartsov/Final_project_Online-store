import GET_CATALOG_PRODUCT from './actionType'

const initialState = {
  catalogProduct: []
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATALOG_PRODUCT:
      return {
        ...state,
        catalogProduct: payload
      }
  
    default:
      return state
  }
}

export default reducer