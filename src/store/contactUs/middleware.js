import axios from 'axios'
import { message } from 'antd'
import { DOMAIN } from '../general'

const BASE_ENDPOINT = `${DOMAIN}/subscribers`

const createNewContactForm = (credentials, history) => {
  axios.post(BASE_ENDPOINT, credentials,)
    .then((response) => {
      if (response.status === 200) {
        history.push('/')
        message.info('Thank you for your message')
      }
    })
    .catch((error) => {
      if (error.response) {
        const requestMessage = error.response.data.message
        message.error(`Error: ${requestMessage}`)
      }
    })
}
export default createNewContactForm