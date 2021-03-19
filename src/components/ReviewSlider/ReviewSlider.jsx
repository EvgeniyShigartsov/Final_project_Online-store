/* eslint-disable max-len */
import React from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'
import { Container } from '../common/Container'
import { Wrapper } from '../common/Wrapper'
import { RoundDots } from './StyledReviewSlider'
// import contentStyle from './StyledReviewSlider'

const contentStyle = {
  height: '310px',
  color: '#000000',
  fontSize: '13px',
  lineHeight: '19px',
  textAlign: 'left',
  background: '#F5F7FF',
  border: '1px solid #000000',
};

const ReviewSlider = () => (
  <Container>
    <Wrapper>
      <Carousel
        effect="fade"
        customPaging={() => (
          <RoundDots />
        )}
      >
        <div>
          <div style={contentStyle}>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</div>
        </div>
        <div>
          <div style={contentStyle}>2</div>
        </div>
        <div>
          <div style={contentStyle}>3</div>
        </div>
        <div>
          <div style={contentStyle}>4</div>
        </div>
      </Carousel>
    </Wrapper>
  </Container>
)

export default ReviewSlider
