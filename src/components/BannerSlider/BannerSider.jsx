import React from 'react'
import { Carousel } from 'antd'
import 'antd/dist/antd.css'

export const BannerSlider = () => {
  const contentStyle = {
    display: 'flex',
    justifyContent: 'center',
    height: '160px',
    width: '90%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <h5>Hello</h5>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <h5>Hello</h5>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <h5>Hello</h5>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <h5>Hello</h5>
        </h3>
      </div>
    </Carousel>
  )
}

export default BannerSlider