import axios from 'axios'
import { createSubscribe } from './actionCreator'

export const createNewSubscribe = () => async (dispatch) => {
  axios.post('/subscribers')
    .then((email) => {
      dispatch(createSubscribe(email))
    })
    .catch((err) => console.log(err))
}
export default createNewSubscribe