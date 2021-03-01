import React from 'react'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Container } from '../common/Container'
import { forDesktop } from '../../styles/mediaBreakPoints'
// import { forTablet, forDesktop } from '../../styles/mediaBrakepoints'
import { FooterHeader } from './footer-components/FooterHeader'
import footerConfig from './footer-components/footer-config/footerConfig'
import FooterLinks from './footer-components/FooterLinks'
import FooterAdress from './footer-components/FooterAdress'
import FooterCopyRight from './footer-components/FooterCopyRight'
import FooterSocialNetwork from './footer-components/FooterSocialNetwork'
import FooterPayment from './footer-components/FooterPayment'
import FooterLine from './footer-components/FooterLine'

export const Footer = () => (
  <StyledFooter>
    <Container>
      <Section>
        <FooterHeader />
        <Wrapper>
          {footerConfig.map((links) => (
            <FooterLinks key={links.title} title={links.title} links={links.links} />
          ))}
          <FooterAdress />
        </Wrapper>
        <FooterLine />
        <Wrapper>
          <FooterSocialNetwork />
          <FooterPayment />
          <FooterCopyRight />
        </Wrapper>
      </Section>
    </Container>
  </StyledFooter>
)

export default Footer

const StyledFooter = styled.footer`
font-size: 12px;
line-height: 1.5;
background-color: #000000;
color: #FFFFFF;

@media(min-width: ${forDesktop.minWidth}px){    
font-size: 13px;
}
`

const Section = styled.section`
padding-top: 35px;

@media(min-width: ${forDesktop.minWidth}px){
padding-top: 45px;
}
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;

@media(min-width: ${forDesktop.minWidth}px){
flex-direction: row;
justify-content: space-between;
margin: 35px 0 35px 0;
}
`