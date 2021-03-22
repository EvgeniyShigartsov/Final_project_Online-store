/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  PriceWrapper,
  ProductCurrentPrice,
  ProductFullPrice, ProductImg, ProductInfo, ProductWrapper
} from './StyledProduct'
import {StarRating} from '../../../StarRating/StarRating';
import { StyledCardReviews } from '../../../ProductCard/StyledProductCard/Common';
import rateCalculator from '../../../../utils/rateCalculator';

export const Product = ({product, reset}) => {
  const { reviewsQuantity, rating } = rateCalculator(product.reviews)
  return (
    <Link onClick={reset} to={`/products/${product.itemNo}`}>
      <ProductWrapper>
        <ProductImg>
          <img src={product.imageUrls[0]} alt="IMG" />
        </ProductImg>
        <ProductInfo>
          <div style={{fontSize: 10}}>{product.name}</div>
          <div style={{fontSize: 8}}>{product.description}</div>
          <div>
            <StarRating rating={rating} />
            <StyledCardReviews>
              Reviews (
              {reviewsQuantity}
              )
            </StyledCardReviews>
          </div>
        </ProductInfo>
        <PriceWrapper>
          <ProductFullPrice>{product.previousPrice}</ProductFullPrice>
          <ProductCurrentPrice>{`${product.currentPrice} ₴`}</ProductCurrentPrice>
        </PriceWrapper>
      </ProductWrapper>
    </Link>
  )
}

Product.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  reset: PropTypes.func.isRequired
}

export default Product