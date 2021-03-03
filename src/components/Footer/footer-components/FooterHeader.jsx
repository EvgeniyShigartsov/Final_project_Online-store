import React from 'react'
import FooterTitle from './footer-style-components/FooterTitle'
import FooterTitleText from './footer-style-components/FooterTitleText'
import FooterSubscribe from './FooterSubscribe'
import StyledWrapperHeader from './footer-style-components/StyledWrapperHeader'

export const FooterHeader = () => (
  <StyledWrapperHeader>
    <div>
      <FooterTitle>Sign Up To Our Newsletter.</FooterTitle>
      <FooterTitleText>Be the first to hear about the latest offers.</FooterTitleText>
    </div>
    <div>
      <FooterSubscribe />
    </div>
  </StyledWrapperHeader>
)

export default FooterHeader