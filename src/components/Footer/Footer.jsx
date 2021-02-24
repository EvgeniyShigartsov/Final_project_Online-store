import React from 'react'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Container } from '../../styles/styled-components/Container'
// import { forTablet, forDesktop } from '../../styles/mediaBrakepoints'
// import { FooterHeader } from './components/FooterHeader'
// import footerConfig from './components/footerConfig'
// import FooterLinks from './components/FooterLinks'
import FooterAdress from './components/FooterAdress'
import FooterCopyRight from './components/FooterCopyRight'
import FooterSocialNetwork from './components/FooterSocialNetwork'
import FooterPaymant from './components/FooterPayment'

export const Footers = () => (
  <Container>
    <Footer>
      <Section>
        {/* <FooterHeader />
        <Wrapper>
        {footerConfig.map((links) => <FooterLinks title={links.links} links={links.links} />)}

        </Wrapper> */}
        <FooterAdress />
        <FooterSocialNetwork />
        <FooterPaymant />
        <FooterCopyRight />
      </Section>
    </Footer>
  </Container>
)

export default Footers

const Footer = styled.footer`
    position: relative;
    clear: both;
    color: hsla(0,0%,100%,.4);
    font-size: 14px;
    line-height: 1.5;
    background-color: #000;
`

const Section = styled.section`

`

// const Wrapper = styled.div`
// display: flex
// `