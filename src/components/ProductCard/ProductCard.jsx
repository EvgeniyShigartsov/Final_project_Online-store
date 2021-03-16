import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StarRating } from '../StarRating/StarRating'
import StyledCardItem, {
  StyledCardImg,
  StyledCardImgWrapper,
  StyledCardLastPrice,
  StyledCardNowPrice,
  StyledCardReviews,
  StyledCardTitle
} from './StyledProductCard';
import { InStock } from './InStock/InStock';
import { CheckAvailability } from './CheckAvailability/CheckAvailability';
import cutString from '../../utils/cutString';
import rateCalculator from '../../utils/rateCalculator';

export const ProductCard = ({ productInfo }) => {
  const {
    name,
    imageUrls,
    reviews,
    previousPrice,
    currentPrice,
    quantity,
    itemNo
  } = productInfo
  
  // string length limitation
  const verifiedTitle = cutString(name, 45)

  // getting an average rating and the number of reviews left
  const { reviewsQuantity, rating } = rateCalculator(reviews)

  return (
    <StyledCardItem>
      {quantity > 0 ? <InStock /> : <CheckAvailability />}

      <Link to={`products/${itemNo}`}>
        <StyledCardImgWrapper>
          <StyledCardImg src={imageUrls[0]} />
        </StyledCardImgWrapper>
      </Link>
      
      <div>
        <StarRating rating={rating} />
        <StyledCardReviews>
          Отзывов (
          {reviewsQuantity}
          )
        </StyledCardReviews>
      </div>

      <Link to={`products/${itemNo}`}>
        <StyledCardTitle>{verifiedTitle}</StyledCardTitle>
      </Link>

      <div>
        <StyledCardLastPrice>{previousPrice}</StyledCardLastPrice>
        <StyledCardNowPrice>
          {currentPrice}
          грн
        </StyledCardNowPrice>
      </div>
    </StyledCardItem>
  )
}

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.number).isRequired,
    previousPrice: PropTypes.number,
    currentPrice: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    itemNo: PropTypes.string.isRequired
  }).isRequired
}

export default ProductCard;
