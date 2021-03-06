import React from 'react'
import styled from 'styled-components'
import { forDesktop } from '../../../styles/mediaBreakPoints'

const FooterLine = () => (
  <Line />
)

export default FooterLine

const Line = styled.div`
display: none;

@media(min-width: ${forDesktop.minWidth}px){
width: 100%;
height: 2px;
display: block;
background: #FFFFFF;
opacity: 0.2;
margin-bottom: 30px;
text-align: center;
}
`
