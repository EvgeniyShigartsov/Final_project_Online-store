import { SET_CUSTOMER_INFO, SET_ORDERS } from './actionType';

export const MODULE_NAME = 'customerInfo';
export const selectCustomerInfo = (state) => state[MODULE_NAME].customerInfo;
export const selectOrders = (state) => state[MODULE_NAME].orders;

const initialState = {
  customerInfo: {},
  orders: []
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
    default:
      return state
  }
}

export default reducer