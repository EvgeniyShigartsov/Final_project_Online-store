import React from 'react'
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { useDispatch } from 'react-redux'
import { Form } from 'antd';
// import axios from 'axios';
import StyledButton from '../../common/Buttons/StyledButton'
import StyledInput from './footer-style-components/StyledInput'
import { letterSubject, letterHtml} from './footer-config/letterConfig'
import createNewSubscribe from '../../../store/createSubscribe/middleware'

const FormSubscribe = () => {
  const dispatch = useDispatch()
  const onFinish = ({email}) => {
    dispatch(createNewSubscribe({email, letterHtml, letterSubject}))
  }
  return (
    <StyledForm name="nest-messages" onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <StyledInput placeholder="email" />
      </Form.Item>
      <StyledButton type="primary" htmlType="submit" size="sm" padding="0" shape="round">
        Subscribe
      </StyledButton>
    </StyledForm>
  )
}

export default FormSubscribe

const StyledForm = styled(Form)`
display: flex;
align-items: center;
justify-content: space-between;
height: auto;
`