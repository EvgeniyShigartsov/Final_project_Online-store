/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-props-no-spreading */
import styled from 'styled-components'
import { Carousel } from 'antd'
import React from 'react'
import { Container } from '../../styles/styled-components/Container'
import { FakeCard } from './FakeCard'
import 'antd/dist/antd.css'

export const NewProductsSlider = () => {
  const carouselStentings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: document.body.clientWidth > 700,
  }
  return (
    <Container style={{ backgroundColor: '#ccc' }}>
      <Wrapper>
        <Carousel {...carouselStentings}>
          <div>
            <FakeCard color="green" />
          </div>
          <div>
            <FakeCard color="tomato" />
          </div>
          <div>
            <FakeCard color="yellow" />
          </div>
          <div>
            <FakeCard color="blue" />
          </div>
        </Carousel>
      </Wrapper>
    </Container>
  )
}
export default NewProductsSlider

const Wrapper = styled.div`
    position: relative;
`