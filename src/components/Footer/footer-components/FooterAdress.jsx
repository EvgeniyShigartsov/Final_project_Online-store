import React from 'react'
import FooterLinksTitle from './footer-style-components/FooterLinksTitle'
import FooterAdressLink from './footer-style-components/FooterAdressLink'
import FooterAdressText from './footer-style-components/FooterAdressText'
import Accordion from './footer-style-components/Accordion'
import Input from './footer-style-components/Input'
import Content from './footer-style-components/Content'
import MobileLine from './MobileLine'

const FooterDesctops = () => (
  <Accordion>
    <Input type="checkbox" id={5} />
    <FooterLinksTitle htmlFor={5}>Address</FooterLinksTitle>
    <Content>
      <FooterAdressText>Address: 1234 Street Adress City Address, 1234</FooterAdressText>
      <FooterAdressText>
        Phones:
        <FooterAdressLink> (00) 1234 5678</FooterAdressLink>
      </FooterAdressText>
      <FooterAdressText>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</FooterAdressText>
      <FooterAdressText>Friday: 9:00 AM - 6:00 PM</FooterAdressText>
      <FooterAdressText>Saturday: 11:00 AM - 5:00 PM</FooterAdressText>
      <FooterAdressText>
        E-mail:
        <FooterAdressLink> shop@email.com</FooterAdressLink>
      </FooterAdressText>
    </Content>
    <MobileLine />
  </Accordion>
)

export default FooterDesctops
