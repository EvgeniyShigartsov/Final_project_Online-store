import React from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import styled from 'styled-components'
import { Container } from '../../styles/styled-components/Container'
import firstImg from '../../images/banner-slider/first.png'
import secondImg from '../../images/banner-slider/second.png'
import thirdImg from '../../images/banner-slider/third.png'
import fourthImg from '../../images/banner-slider/fourth.png'
import { forTablet, forDesktop } from '../../styles/mediaBrakepoints'

const StyledImg = styled.img`
width: 100%;
height: 100%;
`
const StyledDiv = styled.div`
  height: 100px;
  color: #fff;
  text-align: center;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    height: 173px;
  }
  @media(min-width: ${forDesktop.minWidth}px){
    height: 328px;
  }
`
export const BannerSlider = () => (
  <Container>
    <Carousel autoplay>
      <StyledDiv>
        <StyledImg src={firstImg} alt="some img" />
      </StyledDiv>
      <StyledDiv>
        <StyledImg src={secondImg} alt="some img" />
      </StyledDiv>
      <StyledDiv>
        <StyledImg src={thirdImg} alt="some img" />
      </StyledDiv>
      <StyledDiv>
        <StyledImg src={fourthImg} alt="some img" />
      </StyledDiv>
    </Carousel>
  </Container>
)

export default BannerSlider