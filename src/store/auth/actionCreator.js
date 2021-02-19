import { GET_PRODUCTS, SET_PRODUCTS } from './actionType';

export const getProducts = (payload) => ({
  type: GET_PRODUCTS,
  payload
})

export const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload
})
