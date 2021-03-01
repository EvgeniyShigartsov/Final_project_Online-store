import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import FooterLinksTitle from './footer-style-components/FooterLinksTitle'
import FooterLinkItem from './footer-style-components/FooterLinkItem'
import FooterLinksContainer from './FooterLinkContainer'

const FooterLinks = ({ title, links }) => (
  <FooterLinksContainer>
    <Accordion>
      <Input type="radio" name="example_accordion" id="section1" />
      <Label for="section1">{title}</Label>
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
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
}

export default FooterLinks

const Accordion = styled.div`
max-width: auto;
background: #000000;
`
const Input = styled.input`
display: none;

&:checked ~ div {
  display: block;
}

&:checked ~ lable::after {
  transform: translateY(-50%) rotate(0.5turn);
}
`
const Label = styled.label`
padding: 14px 20px;  
display: block;
cursor: pointer;
position: relative;
transition: background 0.1s;

&:hover {
  background: rgba(0, 0, 0, 0.1);
}

&::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  width: 12px;
  height: 6px;
  background-image: url('data:image/svg+xml;utf8,<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 100,0 50,50" style="fill:%23FFFFFF99;" /></svg>');
  background-size: contain;
  transition: transform 0.4s;
  }
`

const Content = styled.div`
padding: 14px 20px;
background: #000000;
display: none;
`