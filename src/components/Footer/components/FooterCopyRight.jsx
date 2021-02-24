import React from 'react'
import { CopyrightOutlined } from '@ant-design/icons'
import styled from 'styled-components'

const FooterCopyRight = () => (
  <Text>
    Copyright
    <CopyrightOutlined />
    2020 Shop Pty. Ltd.
  </Text>
)

export default FooterCopyRight

const Text = styled.p`
font-family: Poppins;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 132.5%;
align-items: center;
text-align: right;
color: #FFFFFF;
opacity: 0.6;
`