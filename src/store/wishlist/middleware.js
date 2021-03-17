/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import { getHeaders } from '../headers'
import {
  setWishlistCreator,
  addProductToWishlistCreator,
  removeProducFromWishlistCreator
} from './actionCreator'

const BASE_ENDPOINT = '/wishlist'

const getParsedListFromLS = () => {
  const check = localStorage.getItem('wishlist')
  if (!check) localStorage.setItem('wishlist', JSON.stringify([]))

  const items = localStorage.getItem('wishlist')
  return JSON.parse(items)
}

export const setWishlist = () => async (dispatch, getState) => {
  const {auth: { isLogin }} = getState()
  const itemsToSet = [...getParsedListFromLS()]
  
  if (isLogin) {
    const headers = getHeaders()
    await axios.get(BASE_ENDPOINT, { headers })
      .then((data) => {
        if (!data.data || data.status !== 200) return
        
        itemsToSet.push(...data.data.products)
      })
      .catch((err) => console.log(err.response))
  }

  const dataToAdd = {
    wishitstItems: itemsToSet,
    wishitstLength: itemsToSet.length
  }
  dispatch(setWishlistCreator(dataToAdd))
}

export const addProductToWishlist = (productID) => (dispatch, getState) => {
  if (!productID) return
  
  const headers = getHeaders()
  
  axios.put(`${BASE_ENDPOINT}/${productID}`, null, { headers })
    .then((d) => console.log(d))
    .catch((e) => console.log(e.response))
}

export const removeProductFromWishlist = (productID) => (dispatch, getState) => {
  if (!productID) return
  const headers = getHeaders()

  axios.delete(`${BASE_ENDPOINT}/${productID}`, { headers })
    .then((d) => console.log(d))
    .catch((e) => console.log(e.response))
}