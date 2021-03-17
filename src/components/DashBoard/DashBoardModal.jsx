/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { Modal as AntModal } from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {setHideModal} from '../../store/dashBoardModal/middleware';
import PasswordChange from './PasswordChange';
import FormInfoChange from './FormInfoChange';

const mapStateToProps = (state) => ({
  show: state.dashBoardModal.show,
  formId: state.dashBoardModal.formId,
})
const Modal = connect(mapStateToProps, { setHideModal })(({
  show, setHideModal, formId, setInfo
}) => {
  const checkForIdtoRender = (id) => {
    switch (id) {
      case 'setInfo':
        return {
          title: 'Change your contact information',
          form: <FormInfoChange setInfo={setInfo} />
        }
        
      case 'setPassword':
        return {
          title: 'Change your password',
          form: <PasswordChange />
        }

      default:
        return ''
    }
  }

  const {title, form} = checkForIdtoRender(formId);
  
  return (
    <StyledAntModal
      title={title}
      cancelText="Close"
      okButtonProps={{style: {display: 'none'}}}
      visible={show}
      onCancel={setHideModal}
    >
      {form}
    </StyledAntModal>
  );
})

const StyledAntModal = styled(AntModal)`
  .ant-modal-body{
    padding-bottom: 0px !important;
  }
`;
export default Modal;
