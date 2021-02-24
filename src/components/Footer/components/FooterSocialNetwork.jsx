import React from 'react'
import { FacebookFilled, InstagramFilled } from '@ant-design/icons'
import styled from 'styled-components'

const FooterSocialNetwork = () => (
  <Wrapper>
    <FacebookFilled />
    <InstagramFilled />
  </Wrapper>
)

export default FooterSocialNetwork

const Wrapper = styled.div`
display: flex
`