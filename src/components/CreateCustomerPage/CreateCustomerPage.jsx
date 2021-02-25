import React from 'react'
import { Container } from '../common/Container'
import { FormContainer, StyledPageHeader } from './StylesCreateCustomer'
import SignUpBox from './SignUpBox/SignUpBox'

const CreateCustomerPage = () => (
  <Container>
    <StyledPageHeader>Customer Registration</StyledPageHeader>
    <FormContainer>
      <SignUpBox />
    </FormContainer>
  </Container>
)
export default CreateCustomerPage