/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { Modal as AntModal } from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {setHideModal} from '../../store/modal/middleware';
import PasswordChange from './PasswordChange';
import FormInfoChange from './FormInfoChange';

const mapStateToProps = (state) => ({
  show: state.dashBoardModal.show,
  formId: state.dashBoardModal.formId,
})
const Modal = connect(mapStateToProps, { setHideModal })(({
  show, setHideModal, formId
}) => {
  const checkForIdtoRender = (id) => {
    switch (id) {
      case 'setInfo':
        return <FormInfoChange />
        
      case 'setPassword':
        return <PasswordChange />

      default:
        return ''
    }
  }
  
  return (
    <StyledAntModal
      title="Add Contact Information"
      cancelText="Close"
      okButtonProps={{style: {display: 'none'}}}
      visible={show}
      onCancel={setHideModal}
    >
      {checkForIdtoRender(formId)}
    </StyledAntModal>
  );
})

const StyledAntModal = styled(AntModal)`
  .ant-modal-body{
    padding-bottom: 0px !important;
  }
`;
export default Modal;