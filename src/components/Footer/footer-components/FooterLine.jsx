import React from 'react'
import styled from 'styled-components'

const FooterLine = () => (
  <Line />
)

export default FooterLine

const Line = styled.div`
content: "";
position: absolute;
width: 78%;
height: 2px;
display: block;
left: calc(50%);
bottom: 45px;
transform: translateX(-50%);
background: #FFFFFF;
opacity: 0.2;
`
