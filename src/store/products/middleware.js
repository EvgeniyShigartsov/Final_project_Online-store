import { message } from 'antd';
import { addProduct, setProducts } from './actionCreator';

const headers = {
  Authorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
}

export const getProducts = () => async (dispatch) => {
  try {
    const res = await fetch('/products')

    if (res.status === 200) {
      const data = await res.json()
      dispatch(setProducts(data))
    }
  } catch (error) {
    message.error(`Sorry ${error}`)
  }
}

export const addNewProduct = (newProduct) => async (dispatch) => {
  try {
    const res = await fetch('/products', {
      method: 'POST',
      headers,
      body: JSON.stringify(newProduct)
    })
    
    if (res.status === 200) {
      const data = await res.json()
      dispatch(addProduct(data))
    }
  } catch (error) {
    message.error(`Sorry ${error}`)
  }
}