/* eslint-disable no-underscore-dangle */
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
const getWishListFromDB = () => {
  const headers = getHeaders()
  const result = axios.get(BASE_ENDPOINT, { headers })
    .then((response) => response)
    .catch((err) => err.response)
  
  return result
}

export const setWishlist = () => async (dispatch, getState) => {
  const {auth: { isLogin }} = getState()
  const itemsToSet = []
  
  if (isLogin) {
    const { data, status } = await getWishListFromDB()
    if (data && status === 200) itemsToSet.push(...data.products)
    else itemsToSet.push(...getParsedListFromLS())
  } else {
    itemsToSet.push(...getParsedListFromLS())
  }
  // такое условие гарантрует что данные будут взяты либо с базы данных либо с локальной памяти.

  const dataToAdd = {
    wishitstItems: itemsToSet,
    wishitstLength: itemsToSet.length
  }
  dispatch(setWishlistCreator(dataToAdd))
}

export const addProductToWishlist = (productID) => async (dispatch, getState) => {
  if (!productID) return
  const {auth: { isLogin }} = getState()
  
  if (isLogin) {
    const headers = getHeaders()
    const { data, status } = await getWishListFromDB()
    const isSucces = data && status === 200
    
    const check = isSucces ? data.products.find((product) => product._id === productID) : null
    console.log(check)
    if (check) return

    axios.put(`${BASE_ENDPOINT}/${productID}`, null, { headers })
      .then((d) => console.log(d))
      .catch((e) => console.log(e.response))
  }
}

export const removeProductFromWishlist = (productID) => (dispatch, getState) => {
  if (!productID) return
  const headers = getHeaders()

  axios.delete(`${BASE_ENDPOINT}/${productID}`, { headers })
    .then((d) => console.log(d))
    .catch((e) => console.log(e.response))
}