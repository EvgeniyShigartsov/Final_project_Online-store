import React from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import { Container } from '../common/Container'
import { Wrapper } from '../common/Wrapper'

const contentStyle = {
  height: '310px',
  color: '#000000',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#F5F7FF',
  
};
  
const ReviewSlider = () => (
  <Container>
    <Wrapper>
      <Carousel effect="fade">
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </Wrapper>
  </Container>
)

export default ReviewSlider
