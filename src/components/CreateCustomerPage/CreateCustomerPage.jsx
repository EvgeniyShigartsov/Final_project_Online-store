import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../common/Container'
import { FormContainer, StyledPageHeader } from './StylesCreateCustomer'
import SignUpBox from './SignUpBox/SignUpBox'

const CreateCustomerPage = () => (
  <Container>
    <StyledPageHeader>Customer Registration</StyledPageHeader>
    <Link to="/">Homepage</Link>
    <FormContainer>
      <SignUpBox />
    </FormContainer>
  </Container>
)
export default CreateCustomerPage