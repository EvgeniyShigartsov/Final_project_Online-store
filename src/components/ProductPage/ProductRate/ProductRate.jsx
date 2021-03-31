/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Rate } from 'antd'
import { connect } from 'react-redux'
import { RateBox, ReviewsCount } from './StylesProductRate'
import { getOneProduct, updateOneProduct } from '../../../store/products/middleware'
import rateCalculator from '../../../utils/rateCalculator'
import { selectIsLogin } from '../../../store/auth/reducer'
import { showAuthModal } from '../../../store/authModal/middleware'

const mapStateToProps = (state) => ({isLogin: selectIsLogin(state)})

const ProductRate = connect(mapStateToProps, { updateOneProduct, showAuthModal })(({
  reviews,
  productID,
  itemNo,
  updateOneProduct,
  isLogin,
  showAuthModal
}) => {
  const { rating, reviewsQuantity } = rateCalculator(reviews)

  const [rate, setRate] = useState(rating)
  const [reviewsCount, setReviewsCount] = useState(reviewsQuantity)
  
  const handleChange = async (value) => {
    if (value === 0) return

    if (!isLogin) {
      showAuthModal('Please, log in to rate this product.')
      return
    }

    setRate(value)
    const response = await getOneProduct(itemNo)
    if (!response || response.status !== 200) return
    
    const product = response.data
    const reviewsArr = product.reviews
    
    const updatedProduct = {
      ...product,
      reviews: [...reviewsArr, value]
    }
    const result = await updateOneProduct(productID, updatedProduct)
    if (!result || result.status !== 200) return
    
    const newReviewsArr = result.data.reviews
    const { reviewsQuantity } = rateCalculator(newReviewsArr)
    setReviewsCount(reviewsQuantity)
  }
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

  return (
    <RateBox>
      <ReviewsCount>
        Reviews (
        {reviewsCount}
        )
      </ReviewsCount>
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={rate} />
      </span>
    </RateBox>
  )
})

ProductRate.propTypes = {
  reviews: PropTypes.instanceOf(Array).isRequired,
  productID: PropTypes.string.isRequired,
  itemNo: PropTypes.string.isRequired,
  updateOneProduct: PropTypes.func
}

export default ProductRate