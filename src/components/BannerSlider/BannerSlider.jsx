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

export const BannerSlider = () => {
  const ref = useRef()
  const [handlers, setHandlers] = useState({next: () => null, prev: () => null})

  useEffect(() => {
    if (ref.current) {
      setHandlers(() => ({next: ref.current.next, prev: ref.current.prev}))
    }
    // при первом рендере ref.current === undefined потому используется useEffect & useState
  }, [])

  return (
    <Container>
      <Wrapper>
        <Carousel autoplay dots={false} ref={ref}>
          <ImageBox>
            <Img src={firstImg} alt="some img" />
          </ImageBox>
          <ImageBox>
            <Img src={secondImg} alt="some img" />
          </ImageBox>
          <ImageBox>
            <Img src={thirdImg} alt="some img" />
          </ImageBox>
          <ImageBox>
            <Img src={fourthImg} alt="some img" />
          </ImageBox>
        </Carousel>
        <ArrowLeft onClick={handlers.prev}>
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px'}}>
            <path d="M7 1L2 6L7 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </ArrowLeft>
        <ArrowRight onClick={handlers.next}>
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px'}}>
            <path d="M1 11L6 6L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </ArrowRight>
      </Wrapper>
    </Container>
  )
}
export default BannerSlider

const Wrapper = styled.div`
  position: relative;
`
const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 28px;
  height: 37px;
  background-color: rgba(37, 41, 49, 0.5);
  border: none;
  transition: 0.2s;

  &:hover {
    background-color: rgba(37, 41, 49, 1);
  }

  @media(min-width: ${forDesktop.minWidth}px) {
    width: 36px;
    height: 48px;
  }
`
const ArrowRight = styled(Arrow)`
  right: 0;
  border-radius: 30px 0px 0px 30px;
`
const ArrowLeft = styled(Arrow)`
  left: 0;
  border-radius: 0px 30px 30px 0px;
`
const Img = styled.img`
width: 100%;
height: 100%;
`
const ImageBox = styled.div`
  height: 100px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    height: 173px;
  }
  @media(min-width: ${forDesktop.minWidth}px){
    height: 328px;
  }
`