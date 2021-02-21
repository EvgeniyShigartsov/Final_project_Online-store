import { message } from 'antd'
import { logIn, logOut } from './actionCreator'

/* eslint-disable no-console */
const headers = {
  'Content-Type': 'application/json'
}

export const createUser = (newUser) => async () => {
  try {
    const res = await fetch('/customers', {
      method: 'POST',
      headers,
      body: JSON.stringify(newUser)
    })

    if (!res.ok) {
      if (res.status === 400) {
        const error = await res.json()
        message.error(error.message)
      }
    }
  
    if (res.status >= 200 && res.status < 300) {
      const data = await res.json()
      localStorage.setItem('customerNo', data.customerNo)
    }
    return res.ok
  } catch (error) {
    message.error(`Sorry ${error}`)
  }
  return 'Trubble'
}

export const authLogIn = (authInfo, history) => async (dispatch) => {
  try {
    const res = await fetch('/customers/login', {
      method: 'POST',
      headers,
      body: JSON.stringify(authInfo)
    })

    if (!res.ok) {
      const error = await res.json()
      if (error.password) {
        message.error(error.password)
      }
      if (error.loginOrEmail) {
        message.error(error.loginOrEmail)
      }
    }

    if (res.status === 200) {
      const data = await res.json()
      localStorage.setItem('token', data.token)
      dispatch(logIn())
      history.push('/')
    }

    return res.ok
  } catch (error) {
    message.error(`Sorry ${error}`)
  }
  return 'Trubble'
}

export const authLogOut = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch(logOut)
}

export default authLogIn
