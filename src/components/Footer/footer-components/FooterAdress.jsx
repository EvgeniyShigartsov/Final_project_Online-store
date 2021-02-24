import React from 'react'
import FooterLinksTitle from './FooterLinksTitle'
import FooterAdressLink from './FooterAdressLink'
import FooterAdressText from './FooterAdressText'

const FooterDesctops = () => (
  <div>
    <FooterLinksTitle>Address</FooterLinksTitle>
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
  </div>
)

export default FooterDesctops
