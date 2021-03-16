/* eslint-disable no-unused-vars */
import axios from 'axios'
import { getHeaders } from '../headers'
import {
  setWishlist,
  addOneProductToWishlist,
  removeOneProducFromWishlist
} from './actionCreator'

export const setWishlistCreator = () => (dispatch) => {
  const headers = getHeaders()

  axios.get('/wishlist', { headers })
}
export const addOneProductToWishlistCreator = () => {}