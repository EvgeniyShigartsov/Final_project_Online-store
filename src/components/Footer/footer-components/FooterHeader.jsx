import React from 'react'
// import {Button } from 'antd';
import FooterTitle from './footer-style-components/FooterTitle'
import FooterTitleText from './footer-style-components/FooterTitleText'
import FooterSubscribe from './FooterSubscribe'
import StyledWrapperHeader from './footer-style-components/StyledWrapperHeader'
// import { createNewSubscribe } from '../../../store/createSubscribe/middleware'

export const FooterHeader = () => (
  <StyledWrapperHeader>
    <div>
      <FooterTitle>Sign Up To Our Newsletter.</FooterTitle>
      <FooterTitleText>Be the first to hear about the latest offers.</FooterTitleText>
    </div>
    <div>
      <FooterSubscribe>
        {/* <Button color="borderBlue" size="lg" /> */}
      </FooterSubscribe>
    </div>
  </StyledWrapperHeader>
)

export default FooterHeader