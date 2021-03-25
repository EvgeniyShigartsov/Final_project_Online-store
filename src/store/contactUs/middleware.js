import axios from 'axios'
import { createContactForm, createContactFormSuccess, createContactFormError } from './actionCreator'
import { letterSubject, letterHtml} from '../../components/Footer/footer-components/footer-config/letterConfig'

const headers = {
  Autorization: localStorage.getItem('token'),
  'Content-Type': 'application/json'
}

const createNewContactForm = ({email}) => async (dispatch) => {
  dispatch(createContactForm());
  axios.post('/subscribers', {email, letterSubject, letterHtml}, {headers})
    .then((response) => {
      dispatch(createContactFormSuccess(response.data))
    })
    .catch((err) => {
      dispatch(createContactFormError(err.response))
    })
}
export default createNewContactForm