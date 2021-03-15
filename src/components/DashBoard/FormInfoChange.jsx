/* eslint-disable react/prop-types */
import React from 'react';
import {
  Form, Input, Button
} from 'antd';
import { updateCustomer } from '../../store/customer/middleware';

// eslint-disable-next-line react/prop-types
const FormInfoChange = ({
  handleCancel,
  setInfo
}) => {
  const onFinish = (values) => {
    handleCancel((prev) => !prev);
    updateCustomer(values);
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
}

export default FormInfoChange;
