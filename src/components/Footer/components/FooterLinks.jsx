import React from 'react'
import PropTypes from 'prop-types'
import FooterLinksTitle from './FooterLinksTitle'
import FooterLinkItem from './FooterLinkItem'
import FooterLinksContainer from './FooterLinkContainer'

const FooterLinks = ({ title, links }) => (
  <FooterLinksContainer>
    <FooterLinksTitle>{title}</FooterLinksTitle>
    {links.map((link) => (
      <FooterLinkItem to={link.to}>
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