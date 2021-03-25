import React from 'react'
import 'antd/dist/antd.css';
import { Form } from 'antd'
import { useHistory } from 'react-router-dom';
import StyledButton from '../../common/Buttons/StyledButton'
import { StyledInput, StyledForm } from './footer-style-components/Styled'
import createNewSubscribe from '../../../store/createSubscribe/middleware'
import { letterHtmlSubscribe, letterSubjectSubscribe } from '../../../store/general';

const FormSubscribe = () => {
  const history = useHistory()
  const onFinish = (values) => {
    const credentials = {
      ...values, letterHtml: letterHtmlSubscribe, letterSubject: letterSubjectSubscribe
    }
    createNewSubscribe(credentials, history)
  }
  return (
    <StyledForm name="nest-messages" onFinish={onFinish}>
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'Enter correct email'
          },
        ]}
      >
        <StyledInput placeholder="your email" />
      </Form.Item>
      <StyledButton type="primary" htmlType="submit" size="sm" padding="0" shape="round">
        Subscribe
      </StyledButton>
    </StyledForm>
  )
}

export default FormSubscribe