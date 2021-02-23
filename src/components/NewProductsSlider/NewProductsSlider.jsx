/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components'
import { Carousel } from 'antd'
import React, { useRef, useEffect, useState } from 'react'
import { Container } from '../../styles/styled-components/Container'
import { FakeCard } from './FakeCard'
import 'antd/dist/antd.css'
import { SliderArrowLeft } from '../../styles/styled-components/SliderArrowLeft'
import { SliderArrowRight } from '../../styles/styled-components/SliderArrowRight'
import { forMobile, forTablet } from '../../styles/mediaBrakepoints'

export const NewProductsSlider = () => {
  const ref = useRef()
  const [handlers, setHandlers] = useState({next: () => null, prev: () => null})
  
  useEffect(() => {
    if (ref.current) {
      setHandlers(() => ({next: ref.current.next, prev: ref.current.prev}))
    }
    // при первом рендере ref.current === undefined потому используется useEffect & useState
  }, [])

  const carouselStentings = {
    slidesToShow: 6,
    slidesToScroll: 3,
    dots: false,
    responsive: [
      {
        breakpoint: forTablet.maxWidth,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: forMobile.maxWidth,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  }
  return (
    <Container>
      <Wrapper style={{ backgroundColor: '#ccc' }}>
        <Carousel ref={ref} {...carouselStentings}>
          <FakeCard color="green" />
          <FakeCard color="tomato" />
          <FakeCard color="yellow" />
          <FakeCard color="blue" />
          <FakeCard color="violet" />
          <FakeCard color="silver" />
          <FakeCard color="black" />
          <FakeCard color="lime" />
          <FakeCard color="wheat" />
          <FakeCard color="lightskyblue" />
          <FakeCard color="#4e4e4e" />
          <FakeCard color="9o9o9o" />
        </Carousel>
        <SliderArrowLeft onClick={handlers.prev} />
        <SliderArrowRight onClick={handlers.next} />
      </Wrapper>
    </Container>
  )
}
export default NewProductsSlider

const Wrapper = styled.div`
    position: relative;
`