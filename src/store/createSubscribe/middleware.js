import axios from 'axios'
import { createSubscribe, createSubscribeSuccess, createSubscribeError } from './actionCreator'
import { DOMAIN, getHeaders } from '../general'

const BASE_ENDPOINT = `${DOMAIN}/subscribers`;

const createNewSubscribe = (newSubscriber) => async (dispatch) => {
  dispatch(createSubscribe());
  const headers = getHeaders();
  const result = axios.post(BASE_ENDPOINT, newSubscriber, {headers})
  dispatch(createSubscribe())

  axios.post(BASE_ENDPOINT, newSubscriber, { headers })
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
  const headers = getHeaders();
  const result = axios
    .get(`${BASE_ENDPOINT}/${email}`, {headers})
    .then((data) => data)
    .catch((err) => err.response);
  return result
}
export default createNewSubscribe