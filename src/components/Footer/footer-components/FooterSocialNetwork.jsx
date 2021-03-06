import React from 'react'
import { FacebookFilled, InstagramFilled } from '@ant-design/icons'
import styled from 'styled-components'
import { forDesktop } from '../../../styles/mediaBreakPoints'

const FooterSocialNetwork = () => (
  <Wrapper>
    <SocialNetwotkLink href="https://www.facebook.com/jv.russia/" target="blank">
      <FacebookFilled />
    </SocialNetwotkLink>
    <SocialNetwotkLink href="https://www.instagram.com/?hl=ru" target="blank">
      <InstagramFilled />
    </SocialNetwotkLink>
  </Wrapper>
)

export default FooterSocialNetwork

const Wrapper = styled.div`
display: flex;
font-size: 22px;

@media(min-width: ${forDesktop.minWidth}px){
justify-content: space-between;
padding: 10px, 20px, 50px, 0;
}
`

const SocialNetwotkLink = styled.a`
font-size: 22px;
color: rgba(255, 255, 255, 0.5);
margin-right: 10px;
`