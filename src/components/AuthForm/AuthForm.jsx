/* eslint-disable react/jsx-props-no-spreading */
import { React} from 'react';
import styled, {css} from 'styled-components'
import {
  Form, Input
} from 'antd';
import Button from '../common/Buttons/Button';
import 'antd/dist/antd.css';

const BaseInput = css`
    height: 50px;
    border-radius: 4px;
    line-height: 20px;
    font-weight: 300;
    color:#8C8C8C;
`

const InputStyled = styled(Input)`
    ${BaseInput}
`

const InputStyledPassword = styled(Input.Password)`
    ${BaseInput}
`

const formLayout = 'vertical'

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 12,
  },
};

const buttonItemLayout = {
  wrapperCol: {
    span: 12,
    offset: 4,
  },
};

const AuthForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <Form
      {...formItemLayout}
      name="authorization"
      layout={formLayout}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Login or Email"
        name="loginOrEmail"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <InputStyled placeholder="Your Login or Email" size="large" />
      </Form.Item>
  
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <InputStyledPassword placeholder="Your password" size="large" />
      </Form.Item>
  
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm