import React, { useEffect, useRef, useState } from 'react'
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
const ImageBox = styled.div`
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
export const BannerSlider = () => {
  const ref = useRef()
  const [handlers, setHandlers] = useState({next: () => null, prev: () => null})

  useEffect(() => {
    if (ref.current) {
      setHandlers(() => ({next: ref.current.next, prev: ref.current.prev}))
    }
  }, [])

  return (
    <Container>
      <Carousel autoplay dots={false} ref={ref}>
        <ImageBox>
          <StyledImg src={firstImg} alt="some img" />
        </ImageBox>
        <ImageBox>
          <StyledImg src={secondImg} alt="some img" />
        </ImageBox>
        <ImageBox>
          <StyledImg src={thirdImg} alt="some img" />
        </ImageBox>
        <ImageBox>
          <StyledImg src={fourthImg} alt="some img" />
        </ImageBox>
      </Carousel>
      <button onClick={handlers.prev} type="button">Prev slide</button>
      <button onClick={handlers.next} type="button">Next slide</button>
    </Container>
  )
}

export default BannerSlider