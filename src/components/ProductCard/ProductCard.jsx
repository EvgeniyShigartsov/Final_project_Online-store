import React from 'react'
import PropTypes from 'prop-types';

import { StarRating } from '../StarRating/StarRating'
import StyledCardItem, {
  StyledCardImg,
  StyledCardLastPrice,
  StyledCardNowPrice,
  StyledCardPriceBlock,
  StyledCardReviews,
  StyledCardTitle
} from './StyledProductCard';
import { InStock } from './InStock/InStock';
import { CheckAvailability } from './CheckAvailability/CheckAvailability';

import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter';
import cutString from '../../utils/cutString';
import rateCalculator from '../../utils/rateCalculator';

export const ProductCard = ({ productInfo }) => {
  const {
    name,
    imageUrls,
    reviews,
    previousPrice,
    currentPrice,
    quantity
  } = productInfo

  // Truncates product name
  const verifiedName = cutString(name, 45);

  // Get the average rating and the number of ratings
  const { rating, reviewsQuantity} = rateCalculator(reviews)

  return (
    <StyledCardItem>
      {quantity > 0 ? <InStock /> : <CheckAvailability />}

      <StyledCardImg url={imageUrls[0]} />

      <div>
        <StarRating rating={rating} />
        <StyledCardReviews>
          Ratings (
          {reviewsQuantity}
          )
        </StyledCardReviews>
      </div>

      <StyledCardTitle>{upperCaseFirstLetter(verifiedName)}</StyledCardTitle>

      <StyledCardPriceBlock>
        <StyledCardNowPrice>
          {currentPrice}
          ₴
        </StyledCardNowPrice>

        <StyledCardLastPrice>
          { previousPrice ? `${previousPrice} ₴` : null }
        </StyledCardLastPrice>
      </StyledCardPriceBlock>

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
  }).isRequired
}

export default ProductCard;
