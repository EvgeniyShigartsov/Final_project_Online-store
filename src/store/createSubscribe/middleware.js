import axios from 'axios'
import { createSubscribe, createSubscribeSuccess, createSubscribeError } from './actionCreator'

const headers = {
  Autorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
}

const createNewSubscribe = (newForm) => async (dispatch) => {
  dispatch(createSubscribe());
  axios.post('/subscribers', newForm, {headers})
    .then((response) => {
      console.log(response);
      dispatch(createSubscribeSuccess(response.data))
    })
    .catch((err) => {
      console.log(err.response.data)
      dispatch(createSubscribeError(err.response))
    })
}
export default createNewSubscribe