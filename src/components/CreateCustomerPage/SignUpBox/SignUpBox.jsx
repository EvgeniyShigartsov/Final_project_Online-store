import React from 'react'
import SignUpForm from './Form/SignUpForm';
import { StyledSignUpBox, StyledFormTitle, StyledFormText } from './StylesSignUpBox'

const SignUpBox = () => (
  <StyledSignUpBox>
    <StyledFormTitle>Create an account</StyledFormTitle>
    <StyledFormText>
      You can сreate an account with email
      adress or phone number.
    </StyledFormText>
    <SignUpForm />
  </StyledSignUpBox>
)
export default SignUpBox