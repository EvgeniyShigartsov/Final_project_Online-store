import axios from 'axios'
import { logIn, logOut } from './actionCreator'

export const authLogIn = (credentials) => (dispatch) => {
  const res = axios.post('/customers/login', credentials)
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
  dispatch(logOut())
}

export default authLogIn