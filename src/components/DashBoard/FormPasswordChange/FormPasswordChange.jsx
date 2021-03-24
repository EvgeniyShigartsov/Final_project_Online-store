/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Form,
  Input,
  Button,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setHideModal } from '../../../store/dashBoardModal/middleware';
import { changePassword } from '../../../store/customer/middleware';

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

const PasswordChange = connect(null, { setHideModal })(({ setHideModal }) => {
  const [form] = Form.useForm();
  const onFinish = ({middlePassword, ...rest}) => {
    changePassword(rest);
    form.resetFields();
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
          {
            type: 'string',
            pattern: new RegExp(
            // eslint-disable-next-line no-useless-escape
              /^([a-zA-Z0-9])*$/i
            ),
            message: 'Enter please only letterts and numbers'
          }
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
          {
            type: 'string',
            pattern: new RegExp(
            // eslint-disable-next-line no-useless-escape
              /^([a-zA-Z0-9])*$/i
            ),
            message: 'Enter please only letterts and numbers'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('middlePassword') === value) {
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
        <Button type="primary" htmlType="submit" onClick={setHideModal}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
})

PasswordChange.propTypes = {
  setHideModal: PropTypes.func
}
export default PasswordChange;
