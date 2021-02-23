import axios from 'axios';
import { setProducts, addProduct, updateProduct } from './actionCreator';

const BASE_ENDPOINT = '/products'

const headers = {
  Authorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
}

export const getProducts = () => async (dispatch) => {
  const res = await axios.get('/products')
    .then((data) => data)
    .catch((error) => error.response)
  if (res.status === 200) {
    dispatch(setProducts(res.data))
  }
}

export const addOneProduct = (newProduct) => async (dispatch) => {
  const res = await axios.post(BASE_ENDPOINT, newProduct, {headers})
    .then((data) => data)
    .catch((error) => error.response)
  if (res.status === 200) {
    dispatch(addProduct(newProduct))
  }
  return res
}

export const updatedOneProduct = (id, newProduct) => async (dispatch) => {
  const res = await axios.put(`${BASE_ENDPOINT}/${id}`, newProduct, {headers})
    .then((data) => data)
    .catch((error) => error)
  if (res.status === 200) {
    dispatch(updateProduct(res.data))
  }
  return res
}

export const getOneProduct = (itemNo) => async () => {
  const res = await axios.get(`${BASE_ENDPOINT}/${itemNo}`)
    .then((data) => data)
    .catch((error) => error)
  return res
}