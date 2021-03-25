import { CONTACT_FORM_SUBMIT_INIT, CONTACT_FORM_SUBMIT_SUCCESS, CONTACT_FORM_SUBMIT_ERROR } from './actionType'

export const MODULE_NAME = 'contactFormModule'

const initialState = {
  isLoading: false,
  error: null,
  isSuccess: false,
}
export const contactFormReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CONTACT_FORM_SUBMIT_INIT: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case CONTACT_FORM_SUBMIT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        isSuccess: true,
      }
    }
    case CONTACT_FORM_SUBMIT_ERROR: {
      return {
        ...state,
        error: payload
      }
    }
    default: {
      return state
    }
  }
}