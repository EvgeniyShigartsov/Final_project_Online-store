import {SHOW_MODAL, HIDE_MODAL} from './actionType';

const initialState = {
  show: false,
  formId: ''
}

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: true,
        formId: payload
      }
    case HIDE_MODAL:
      return {
        ...state,
        show: false,
        formId: ''
      }
    
    default:
      return state
  }
}
export default reducer;