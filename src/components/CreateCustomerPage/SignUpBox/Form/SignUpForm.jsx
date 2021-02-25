/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react'
import { Input, Col } from 'antd';
import StyledFrom from './StylesSignUpForm'
import 'antd/dist/antd.css'
import Button from '../../../common/Buttons/Button'

const SignUpForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  
  const formLayout = {
    labelCol: {
      span: 10,
      offset: 0
    },
    wrapperCol: {
      span: 14,
    },
    
  }
  
  const passwordMatchValidator = ({ getFieldValue }) => {
    const isPasswordsMatch = (_, value) => {
      if (getFieldValue('password') !== value) {
        return Promise.reject('Passwords is not match.')
      }
      return Promise.resolve()
    }
    return {
      validator: isPasswordsMatch
    }
  }
    
  return (
    <Col span={24}>
      <StyledFrom
        {...formLayout}
        name="sign-up-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >

        <StyledFrom.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name.',
            },
          ]}
        >
          <Input />
        </StyledFrom.Item>

        <StyledFrom.Item
          label="Surename"
          name="surename"
          rules={[
            {
              required: true,
              message: 'Please input your Surename.',
            },
          ]}
        >
          <Input />
        </StyledFrom.Item>

        <StyledFrom.Item
          label="Login"
          name="login"
          rules={[
            {
              required: true,
              message: 'Please set your login.',
            },
          ]}
        >
          <Input />
        </StyledFrom.Item>
      
        <StyledFrom.Item
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
        </StyledFrom.Item>

        <StyledFrom.Item
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
        </StyledFrom.Item>

        <StyledFrom.Item
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
        </StyledFrom.Item>

        <StyledFrom.Item>
          <Button type="submit" width={133} height={38}>Sign Up</Button>
        </StyledFrom.Item>

      </StyledFrom>
    </Col>
  )
}

export default SignUpForm