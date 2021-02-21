import React from 'react'
import StarRating from '../StarRating/StarRating'
import StyledCardItem, {
  StyledCardImg,
  StyledCardLastPrice,
  StyledCardNowPryce,
  StyledCardReviews,
  StyledCardTitle
} from './StyledProductCard';

function ProductCart() {
  return (
    <StyledCardItem>
      <StyledCardImg src="https://i.citrus.ua/imgcache/size_500/uploads/shop/9/9/9908770da61d5c79571f58b6be08a924.jpg" />
      <div>
        <StarRating />
        <StyledCardReviews>Reviews (4)</StyledCardReviews>
      </div>

      <StyledCardTitle>
        EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
      </StyledCardTitle>

      <div>
        <StyledCardLastPrice>$599.00</StyledCardLastPrice>
        <StyledCardNowPryce>$499.00</StyledCardNowPryce>
      </div>
    </StyledCardItem>
  )
}

export default ProductCart;
