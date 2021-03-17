import axios from 'axios'
import { createSubscribe, createSubscribeSuccess, createSubscribeError } from './actionCreator'

const headers = {
  Autorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
}

const createNewSubscribe = (newSubscriber) => async (dispatch) => {
  dispatch(createSubscribe());
  const result = axios.post('/subscribers', newSubscriber, {headers})
    .then((response) => {
      console.log(response);
      dispatch(createSubscribeSuccess(response.data))
      return response
    })
    .catch((err) => {
      console.log(err.response)
      dispatch(createSubscribeError(err.response))
      return err.response
    })
  return result
}
export const getSubscriber = (email) => {
  const result = axios
    .get(`/subscribers/${email}`, {headers})
    .then((data) => data)
    .catch((err) => err.response);
  return result
}
export default createNewSubscribe