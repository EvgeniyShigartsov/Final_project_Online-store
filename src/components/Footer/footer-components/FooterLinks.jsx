import React from 'react'
import PropTypes from 'prop-types'
import FooterLinksTitle from './footer-style-components/FooterLinksTitle'
import FooterLinkItem from './footer-style-components/FooterLinkItem'
import FooterLinksContainer from './FooterLinkContainer'

const FooterLinks = ({ title, links }) => (
  <FooterLinksContainer>
    <FooterLinksTitle>{title}</FooterLinksTitle>
    {links.map((link) => (
      <FooterLinkItem key={link.text} to={link.to}>
        {link.text}
      </FooterLinkItem>
    ))}
  </FooterLinksContainer>
)

FooterLinks.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
}

export default FooterLinks