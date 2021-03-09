import axios from 'axios'
import getCatalogProductCreater from './actionCreater'

export const getCatalogProducts = () => async (dispatch) => {
  axios.get('/catalog.json')
    .then((data) => {
      dispatch(getCatalogProductCreater(data.data))
    })
    .catch((err) => console.log(err))
}

export default getCatalogProducts