import axios from 'axios'
import { createSubscribe, createSubscribeSuccess, createSubscribeError } from './actionCreator'
import { DOMAIN } from '../general'

const BASE_ENDPOINT = `${DOMAIN}/subscribers`

const headers = {
  Autorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
}

const createNewSubscribe = (newSubscriber) => async (dispatch) => {
  dispatch(createSubscribe());
  axios.post(BASE_ENDPOINT, newSubscriber, { headers })
    .then((response) => {
      console.log(response);
      dispatch(createSubscribeSuccess(response.data))
    })
    .catch((err) => {
      console.log(err.response)
      dispatch(createSubscribeError(err.response))
    })
}
export default createNewSubscribe