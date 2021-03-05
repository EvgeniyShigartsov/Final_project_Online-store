import {
  SET_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  GET_NEW_PRODUCTS,
  SET_TO_CATALOG,
  SET_CATALOG_PRODUCTS_QUANTITY
} from './actionType';

export const MODULE_NAME = 'products'

const initialState = {
  products: [],
  catalog: {
    catalogProducts: [],
    productsQuantity: 0
  },
  newProducts: [],
  pageProduct: {}
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

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((el) => (+el.itemNo !== +payload.itemNo ? el : payload))
      }
      
    case GET_NEW_PRODUCTS:
      return {
        ...state,
        newProducts: payload
      }
    case SET_TO_CATALOG:
      return {
        ...state,
        catalog: {
          ...state.catalog,
          catalogProducts: payload
        }
      }
    case SET_CATALOG_PRODUCTS_QUANTITY:
      return {
        ...state,
        catalog: {
          ...state.catalog,
          productsQuantity: payload
        }
      }
    default:
      return state
  }
}

export default reducer