/* eslint-disable no-unused-vars */
import axios from 'axios'
import { DOMAIN } from '../general'
import { logIn, logOut } from './actionCreator'
import updateWishlistCreator from '../wishlist/actionCreator'
import { initialState as wishlistInitialState} from '../wishlist/reducer'

const wishlistTeamplate = {
  wishitstItems: [],
  wishitstLength: 0
}

export const authLogIn = (credentials) => (dispatch) => {
  const res = axios.post(`${DOMAIN}/customers/login`, credentials)
    .then((data) => {
      if (data.status === 200) {
        dispatch(logIn())
      }
      return data
    })
    .catch((error) => error.response)
  return res
}

export const authLogOut = () => (dispatch) => {
  localStorage.removeItem('token')
  localStorage.removeItem('wishlist')
  dispatch(updateWishlistCreator(wishlistTeamplate))
  dispatch(logOut())
}

export default authLogIn
