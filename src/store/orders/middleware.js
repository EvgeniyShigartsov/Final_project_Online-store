import axios from 'axios';
import { getHeaders } from '../headers';

const getOrders = () => {
  const headers = getHeaders()
  const results = axios.get('/orders', {headers})
    .then((data) => data)
    .catch((error) => error.response)
  return results
}
export default getOrders;