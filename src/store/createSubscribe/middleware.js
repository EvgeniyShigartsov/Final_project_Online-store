import axios from 'axios'
import { createSubscribe, createSubscribeSuccess, createSubscribeError } from './actionCreator'
import { DOMAIN } from '../general'

const BASE_ENDPOINT = `${DOMAIN}/subscribers`;

const createNewSubscribe = (newSubscriber) => async (dispatch) => {
<<<<<<< HEAD
  dispatch(createSubscribe());
  const headers = getHeaders();
  const result = axios.post(BASE_ENDPOINT, newSubscriber, {headers})
=======
>>>>>>> b210969466aafb56d4f4fa0bd5ab3f468b60d26c
  dispatch(createSubscribe())

  axios.post(BASE_ENDPOINT, newSubscriber)
    .then((response) => {
      console.log(response)
      dispatch(createSubscribeSuccess(response.data))
      return response
    })
    .catch((err) => {
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