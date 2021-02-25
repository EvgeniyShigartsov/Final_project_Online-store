import React from 'react'
import { Link } from 'react-router-dom'
import { LinkWrapper, StyledDiv } from '../StylesSignUpBox'
import Button from '../../../common/Buttons/Button'

const LoginPageLink = () => (
  <LinkWrapper>
    <StyledDiv>
      Already registered ?
    </StyledDiv>
    <Link to="/signin">
      <Button type="borderBlue" width={120} height={30}>Sign in</Button>
    </Link>
  </LinkWrapper>
)
export default LoginPageLink