import React from 'react'
import PropTypes from 'prop-types'
import FooterLinksTitle from './footer-style-components/FooterLinksTitle'
import FooterLinkItem from './footer-style-components/FooterLinkItem'
import FooterLinksContainer from './FooterLinkContainer'
import Content from './footer-style-components/Content'
import Accordion from './footer-style-components/Accordion'
import Input from './footer-style-components/Input'

const FooterLinks = ({ title, links, id }) => (
  <FooterLinksContainer>
    <Accordion>
      <Input type="radio" id={id} />
      <FooterLinksTitle htmlFor={id}>{title}</FooterLinksTitle>
      <Content>
        {links.map((link) => (
          <FooterLinkItem key={link.text} to={link.to}>
            {link.text}
          </FooterLinkItem>
        ))}
      </Content>
    </Accordion>
  </FooterLinksContainer>
)

FooterLinks.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
}

export default FooterLinks