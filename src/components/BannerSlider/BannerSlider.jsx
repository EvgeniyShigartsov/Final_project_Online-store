import React from 'react'
import Carousel from '../Carousel/Carousel'
import firstImg from '../../images/banner-slider/first.png'
import secondImg from '../../images/banner-slider/second.png'
import thirdImg from '../../images/banner-slider/third.png'
import fourthImg from '../../images/banner-slider/fourth.png'
import { ImageBox, Img, SliderWrapper } from './StylesBannerSlider'
import { forDesktop } from '../../styles/mediaBreakPoints'

export const BannerSlider = () => {
  const carouselSettings = {
    autoplay: false,
    dots: false,
    responsive: [
      {
        breakpoint: forDesktop.minWidth,
        settings: {
          dots: true
        }
      },
    ]
  }
  return (
    <SliderWrapper>
      <Carousel carouselSettings={carouselSettings}>
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
    </SliderWrapper>
  )
}
export default BannerSlider