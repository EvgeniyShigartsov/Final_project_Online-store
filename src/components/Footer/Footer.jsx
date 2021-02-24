import React from 'react'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Container } from '../../styles/styled-components/Container'
// import { forTablet, forDesktop } from '../../styles/mediaBrakepoints'
import { FooterHeader } from './footer-components/FooterHeader'
import footerConfig from './footer-components/footerConfig'
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
    position: relative;
    clear: both;
    color: hsla(0,0%,100%,.4);
    font-size: 14px;
    line-height: 1.5;
    background-color: #000;
`

const Section = styled.section`
padding-top: 4.5em;
`

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin: 3.5em 0 3.5em 0;
`