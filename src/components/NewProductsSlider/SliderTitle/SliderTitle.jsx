import React from 'react'
import { TitleWrapper, Title, StyledAllProductsLink, } from './StylesSliderTItle'

const SliderTitle = () => (
  <TitleWrapper>
    <Title>New products</Title>
    <StyledAllProductsLink to="/">See all new products</StyledAllProductsLink>
  </TitleWrapper>
)
export default SliderTitle