import { POST_SUBSCRIBE } from './actionType'

export const MODULE_NAME = 'createSubscribeModule'

const initialState = {
  
  error: true
}
export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case POST_SUBSCRIBE: {
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
export default reducer