/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { SET_CUSTOMER_INFO, SET_ORDERS } from './actionType';

export const setCustomerInfo = (payload) => ({
  type: SET_CUSTOMER_INFO,
  payload
})

export const setOrders = (payload) => ({
  type: SET_ORDERS,
  payload
})