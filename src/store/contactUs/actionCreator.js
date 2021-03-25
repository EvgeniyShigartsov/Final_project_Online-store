import { CONTACT_FORM_SUBMIT_INIT, CONTACT_FORM_SUBMIT_SUCCESS, CONTACT_FORM_SUBMIT_ERROR } from './actionType'

export const createContactForm = () => ({type: CONTACT_FORM_SUBMIT_INIT})
export const createContactFormSuccess = (payload) => ({
  type: CONTACT_FORM_SUBMIT_SUCCESS, payload
})
export const createContactFormError = (payload) => ({type: CONTACT_FORM_SUBMIT_ERROR, payload})