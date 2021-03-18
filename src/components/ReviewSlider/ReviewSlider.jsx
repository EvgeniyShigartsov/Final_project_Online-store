/* eslint-disable max-len */
import React from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import { Container } from '../common/Container'
import { Wrapper } from '../common/Wrapper'
import contentStyle from './StyledReviewSlider'
  
const ReviewSlider = () => (
  <Container>
    <Wrapper>
      <Carousel effect="fade">
        <div>
          <h3 style={contentStyle}>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</h3>
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
