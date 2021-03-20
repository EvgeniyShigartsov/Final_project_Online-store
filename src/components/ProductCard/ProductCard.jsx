/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Compomemts
import { InStock } from './InStock/InStock';
import { CheckAvailability } from './CheckAvailability/CheckAvailability';
import { StarRating } from '../StarRating/StarRating'
import StyledButton from '../common/Buttons/StyledButton'
import FavoriteIcon from '../FavotiteIcon/FavoriteIcon'

// Styles
import {
  CardItem,
  CardReviews,
  CardTitle,
  CardImage,
  ReviewsBox,
  AddToCartIcon,
  AddToCartIconWrapper,
  ImageWrapper,
  PurchaseGroup,
  PriceBox,
  RunningOutLine,
  CardLastPrice,
  CardCurrentPrice,
} from './StyledProductCard'

// Functions
import cutString from '../../utils/cutString';
import rateCalculator from '../../utils/rateCalculator';
import upperCaseFirstLetter from '../../utils/upperCaseFirstLetter';

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
  
  // string length limitation and translation of the first letter into capital
  const verifiedTitle = upperCaseFirstLetter(cutString(name, 24))

  // getting an average rating and the number of reviews left
  const { reviewsQuantity, rating } = rateCalculator(reviews)
  return (
    <CardItem>

      <Link to={`products/${itemNo}`}>
        <ImageWrapper>
          <CardImage src={imageUrls[0]} />
        </ImageWrapper>
      </Link>

      <ReviewsBox>
        <StarRating rating={rating} />
        <CardReviews>
          Reviews (
          {reviewsQuantity}
          )
        </CardReviews>
        <FavoriteIcon
          product={productInfo}
          small
          showTooltip
        />
      </ReviewsBox>
      {quantity < 1 ? <CheckAvailability /> : <InStock />}

      <Link to={`products/${itemNo}`}>
        <CardTitle>
          {verifiedTitle}
        </CardTitle>
      </Link>

      <PurchaseGroup>
        <PriceBox>
          <CardLastPrice>
            {`${previousPrice} ₴`}
          </CardLastPrice>
          <CardCurrentPrice>
            {`${currentPrice} ₴`}
          </CardCurrentPrice>
        </PriceBox>
        <StyledButton type="borderBlue" size="xs" shape="round">Add to cart</StyledButton>
      </PurchaseGroup>
    </CardItem>
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
