/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import { setShowModal } from '../../store/modal/middleware';
// import { updateCustomer } from '../../store/customer/middleware';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

// eslint-disable-next-line react/prop-types
const PasswordChange = () => {
  const [form] = Form.useForm();
  const onFinish = ({middlePassword, ...rest}) => {
    console.log('Received values of form: ', rest);
  };
  
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="password"
        label="Old Password"
        rules={[
          {
            required: true,
            message: 'Please input your old password!',
          },
          {
            message: 'Password length must be at least 8 symbols',
            min: 8
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="middlePassword"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          {
            message: 'Password length must be at least 8 symbols',
            min: 8
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="newPassword"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          {
            message: 'Password length must be at least 8 symbols',
            min: 8
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
    
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={setShowModal}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default PasswordChange;
