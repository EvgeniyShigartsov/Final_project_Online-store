import React from 'react';
import {
  Form, Input, Button
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateCustomer } from '../../../store/customer/middleware';
import { setHideModal } from '../../../store/dashBoardModal/middleware';

const FormInfoChange = connect(null, { setHideModal })(({
  setInfo, setHideModal
}) => {
  const onFinish = (values) => {
    updateCustomer(values);
    setHideModal();
    setInfo((prev) => ({
      ...prev,
      ...values
    }))
  }
  return (
    <Form name="nest" onFinish={onFinish}>
      <Form.Item
        name="firstName"
        label="First name"
        rules={[{
          required: true,
          type: 'string',
          pattern: new RegExp(
            // eslint-disable-next-line no-useless-escape
            /^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i
          ),
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
          pattern: new RegExp(
            // eslint-disable-next-line no-useless-escape
            /^[a-zA-Z@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]+$/i
          ),
          message: 'Enter correct First name'
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
  setInfo: PropTypes.func.isRequired,
  setHideModal: PropTypes.bool,
}
export default FormInfoChange;
