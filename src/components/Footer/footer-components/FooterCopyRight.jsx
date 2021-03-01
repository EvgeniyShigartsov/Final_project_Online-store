import React from 'react'
import { CopyrightOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { forDesktop } from '../../../styles/mediaBreakPoints'

const FooterCopyRight = () => (
  <Text>
    Copyright
    <CopyrightOutlined />
    2020 Shop Pty. Ltd.
  </Text>
)

export default FooterCopyRight

const Text = styled.p`
font-style: normal;
font-weight: 500;
font-size: 10px;
align-items: center;
text-align: right;
opacity: 0.6;

@media(min-width: ${forDesktop.minWidth}px){
font-size: 12px;
color: #FFFFFF;
opacity: 0.6;
}
`