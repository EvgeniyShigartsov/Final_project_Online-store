import React from 'react'
import { Container } from '../common/Container'
import { FormContainer, StyledPageHeader } from './StylesCreateCustomer'
import SignUpBox from './SignUpBox/SignUpBox'
import LoginPageLink from './LoginPageLink/LoginPageLink'

const CreateCustomerPage = () => (
  <Container>
    <StyledPageHeader>Customer Registration</StyledPageHeader>
    <FormContainer>
      <SignUpBox />
      <LoginPageLink />
    </FormContainer>
  </Container>
)
export default CreateCustomerPage