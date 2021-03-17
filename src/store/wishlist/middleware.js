/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import axios from 'axios'
import { getHeaders } from '../headers'
import updateWishlistCreator from './actionCreator'

const BASE_ENDPOINT = '/wishlist'

const getParsedListFromLS = () => {
  const check = localStorage.getItem('wishlist')
  if (!check) localStorage.setItem('wishlist', JSON.stringify([]))

  const items = localStorage.getItem('wishlist')
  return JSON.parse(items)
}
const addProductToLS = (product) => {
  const prevItems = getParsedListFromLS()
  const updatedItems = [...prevItems, product]
  localStorage.setItem('wishlist', JSON.stringify(updatedItems))
  return updatedItems
}
const removeProductFromLS = (product) => {
  const prevItems = getParsedListFromLS()
  const updatedItems = prevItems.filter((item) => item._id !== product._id)
  localStorage.setItem('wishlist', JSON.stringify(updatedItems))
  return updatedItems
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
  dispatch(updateWishlistCreator(dataToAdd))
}

export const addProductToWishlist = (product) => async (dispatch, getState) => {
  // if (!product || !product._id) return
  // const productID = product._id
  const productID = product
  const {auth: { isLogin }} = getState()
  const updatedList = []

  if (isLogin) {
    const headers = getHeaders()
    const { data, status } = await getWishListFromDB()
    const isSucces = data && status === 200
    const check = isSucces ? data.products.find((product) => product._id === productID) : null
    if (check) {
      updatedList.push(...data.products)
      return
    } // Вынужденя проверка, потому что бэк написан таким образом что может хранить один и тот же
    //  id товара для одного пользователья дважды+ раз.

    await axios.put(`${BASE_ENDPOINT}/${productID}`, null, { headers })
      .then((response) => {
        const {data, status} = response
        if (data && status === 200) updatedList.push(...data.products)
        else updatedList.push(...getParsedListFromLS())
      })
      .catch((err) => console.log(err.response))
  } else {
    const updatedItems = addProductToLS(product)
    updatedList.push(...updatedItems)
  }

  const dataToAdd = {
    wishitstItems: updatedList,
    wishitstLength: updatedList.length
  }
  dispatch(updateWishlistCreator(dataToAdd))
}

export const removeProductFromWishlist = (product) => async (dispatch, getState) => {
  // if (!product || !product._id) return
  const productID = product
  const {auth: { isLogin }} = getState()
  const updatedList = []
  
  if (isLogin) {
    const headers = getHeaders()
    await axios.delete(`${BASE_ENDPOINT}/${productID}`, { headers })
      .then((response) => {
        const { data, status } = response

        if (data && status === 200) updatedList.push(...data.products)
        else updatedList.push(...getParsedListFromLS())
      })
      .catch((err) => console.log(err.response))
  } else {
    const updatedItems = removeProductFromLS(product)
    updatedList.push(...updatedItems)
  }

  const dataToAdd = {
    wishitstItems: updatedList,
    wishitstLength: updatedList.length
  }
  dispatch(updateWishlistCreator(dataToAdd))
}
