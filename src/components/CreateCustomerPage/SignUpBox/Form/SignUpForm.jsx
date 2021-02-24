/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { Form, Input } from 'antd';
import 'antd/dist/antd.css'
import Button from '../../../common/Buttons/Button'

const SignUpForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };
        
  const passwordMatchValidator = ({ getFieldValue }) => {
    const isPasswordsMatch = (_, value) => {
      if (getFieldValue('password') !== value) {
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject('Passwords is not match.')
      }
      return Promise.resolve()
    }
    return {
      validator: isPasswordsMatch
    }
  }
    
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <Form
      {...layout}
      name="sign-up-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email.',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password.',
          },
          {
            message: 'Password length must be at least 8 symbols',
            min: 8
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Confrim password"
        name="confrim-password"
        rules={[
          {
            required: true,
            message: 'Please input your password.',
          },
          {
            message: 'Password length must be at least 8 symbols',
            min: 8
          },
          passwordMatchValidator,
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="submit" width={133} height={38}>Sign Up</Button>
      </Form.Item>
    </Form>
  )
}

export default SignUpForm