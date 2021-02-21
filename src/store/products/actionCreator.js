import { ADD_PRODUCT, SET_PRODUCTS } from './actionType';

export const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload
})

export const addProduct = (payload) => ({
  type: ADD_PRODUCT,
  payload
})