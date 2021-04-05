/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  Form, Input, Button
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateCustomer } from '../../../store/customer/middleware';
import { setHideModal } from '../../../store/dashBoardModal/middleware';
import { selectModalState } from '../../../store/dashBoardModal/reducer'
import { selectCustomerInfo } from '../../../store/customer/reducer'

const mapStateToProps = (state) => ({
  show: selectModalState(state),
  info: selectCustomerInfo(state)
})

const FormInfoChange = connect(mapStateToProps, { setHideModal, updateCustomer })(({
  setHideModal, show, updateCustomer
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    updateCustomer(values, 'Your contact information has been changed');
    setHideModal();
    form.resetFields()
  }
  useEffect(() => {
    if (!show) {
      form.resetFields()
    }
  }, [form, show])
  return (
    <Form name="nest" form={form} onFinish={onFinish} datatest-id="ModalFormInfo">
      <Form.Item
        name="firstName"
        label="First name"
        rules={[{
          required: true,
          type: 'string',
          pattern: /^[a-zA-ZА-Яа-я]+$/,
          message: 'Enter correct First name'
        }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        style={{paddingBottom: '0px'}}
        name="lastName"
        label="Last name"
        rules={[{
          required: true,
          type: 'string',
          pattern: /^[a-zA-ZА-Яа-я]+$/,
          message: 'Enter correct Last name'
        }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
})
FormInfoChange.propTypes = {
  setHideModal: PropTypes.func.isRequired,
}
export default FormInfoChange;
