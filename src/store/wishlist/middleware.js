/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import { DOMAIN, getHeaders } from '../general'
import updateWishlistCreator from './actionCreator'

const BASE_ENDPOINT = `${DOMAIN}/wishlist`

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

const getItemsFromDB = () => {
  const headers = getHeaders()
  return axios.get(BASE_ENDPOINT, { headers })
    .then((response) => response)
    .catch((err) => {
      console.log(err.response)
      return err.response
    })
}

export const setWishlist = () => async (dispatch, getState) => {
  const {auth: { isLogin }} = getState()
  const itemsToSet = []
  
  if (isLogin) {
    const { data, status } = await getItemsFromDB()
    if (data && status === 200) itemsToSet.push(...data.products)
  } else {
    itemsToSet.push(...getParsedListFromLS())
  }

  const dataToAdd = {
    wishitstItems: itemsToSet,
    wishitstLength: itemsToSet.length
  }
  dispatch(updateWishlistCreator(dataToAdd))

  console.log(dataToAdd)
}

export const addProductToWishlist = (product) => async (dispatch, getState) => {
  if (!product || !product._id) return

  const productID = product._id
  const {auth: { isLogin }} = getState()
  const updatedList = []

  if (isLogin) {
    const headers = getHeaders()
    await axios.put(`${BASE_ENDPOINT}/${productID}`, null, { headers })
      .then((response) => {
        const { data, status } = response
        if (data && status === 200) updatedList.push(...data.products)
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
  if (!product || !product._id) return

  const productID = product._id
  const {auth: { isLogin }} = getState()
  const updatedList = []
  
  if (isLogin) {
    const headers = getHeaders()
    await axios.delete(`${BASE_ENDPOINT}/${productID}`, { headers })
      .then((response) => {
        const { data, status } = response
        if (data && status === 200) updatedList.push(...data.products)
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

export const compareLSItemsAndDBItems = () => async (dispatch) => {
  const { data, status } = await getItemsFromDB()
  const itemsLS = getParsedListFromLS()
  const itemsDB = []
  if (data && status === 200) itemsDB.push(...data.products)
  const allItems = [...itemsLS, ...itemsDB]
  
  const uniqueList = []
  allItems.forEach((el) => {
    const check = Boolean(uniqueList.find((item) => item.itemNo === el.itemNo))
    if (!check) uniqueList.push(el)
  })

  const dataToAdd = {
    wishitstItems: uniqueList,
    wishitstLength: uniqueList.length
  }
  dispatch(updateWishlistCreator(dataToAdd))

  const diff = []
  itemsLS.forEach((el) => {
    const check = Boolean(itemsDB.find((item) => item.itemNo === el.itemNo))
    if (!check) diff.push(el)
  })

  console.log(diff)
  const headers = getHeaders()

  // diff.forEach(async (el, i) => {
  //   await axios.put(`${BASE_ENDPOINT}/${el._id}`, null, { headers })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err.response))
  //   console.log(i)
  // })

  let timeout = 500
  diff.forEach((el, i) => {
    setTimeout(() => {
      axios.put(`${BASE_ENDPOINT}/${el._id}`, null, { headers })
        .then((res) => console.log(res))
        .catch((err) => console.log(err.response))
    }, timeout)

    timeout += 500
    console.log(i)
  })
}
