import {
  SET_CUSTOMER_INFO, SET_ORDERS, START_LOADING, STOP_LOADING
} from './actionType';

export const MODULE_NAME = 'customerInfo';
export const selectCustomerInfo = (state) => state[MODULE_NAME].customerInfo;
export const selectOrders = (state) => state[MODULE_NAME].orders;
export const selectIsLoading = (state) => state[MODULE_NAME].isLoading;

const initialState = {
  customerInfo: {},
  orders: [],
  isLoading: false,
}

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_CUSTOMER_INFO:
      return {
        ...state,
        customerInfo: payload
      }
    case SET_ORDERS:
      return {
        ...state,
        orders: payload
      }
    case START_LOADING:
    case STOP_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading
      }
    default:
      return state
  }
}

export default reducer