import React from 'react'
import styled from 'styled-components'
import FooterTitle from './FooterTitle'
import FooterTitleText from './FooterTitleText'
import FooterSignature from './FooterSignature'

export const FooterHeader = () => (
  <Wrapper>
    <div>
      <FooterTitle>Sign Up To Our Newsletter.</FooterTitle>
      <FooterTitleText>Be the first to hear about the latest offers.</FooterTitleText>
    </div>
    <div>
      <FooterSignature />
    </div>
  </Wrapper>
)

export default FooterHeader

const Wrapper = styled.div`
display: flex;
`