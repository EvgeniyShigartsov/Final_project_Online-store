/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Rate } from 'antd'
import { RateBox, ReviewsCount } from './StylesProductRate'

const ProductRate = ({ rating, reviews }) => {
  const [rate, setRate] = useState(rating)
  
  const handleChange = (value) => {
    console.log(value)
    setRate(value)
  }
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

  return (
    <RateBox>
      <ReviewsCount>
        Reviews (
        {reviews}
        )
      </ReviewsCount>
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={rate} />
        {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ''}
      </span>
    </RateBox>
  )
}

ProductRate.propTypes = {
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired
}

export default ProductRate