/* eslint-disable no-unused-vars */
import { setShowModal, setHideModal } from './actionCreator'
import { getCustomer } from '../customer/middleware'

export const showModal = () => async (dispatch, getState) => {
  const {auth: { isLogin }} = getState()
  let customerEmail = ''

  if (isLogin) {
    const { data, status } = await getCustomer()
    if (data && status === 200) customerEmail = data.email
  }
  dispatch(setShowModal(customerEmail))
}
export const hideModal = () => (dispatch) => dispatch(setHideModal())
