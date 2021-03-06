import React from 'react'
import styled from 'styled-components'
import { forDesktop } from '../../../styles/mediaBreakPoints'

const FooterLineMobile = () => (
  <Line />
)

export default FooterLineMobile

const Line = styled.div`
width: 100%;
height: 2px;
display: block;
background: #FFFFFF;
opacity: 0.2;
text-align: center;

@media(min-width: ${forDesktop.minWidth}px){
display: none;
}
`
