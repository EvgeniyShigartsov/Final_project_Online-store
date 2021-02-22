import React from 'react'
import PropTypes from 'prop-types';
import StarRating from '../StarRating/StarRating'
import StyledCardItem, {
  StyledCardImg,
  StyledCardLastPrice,
  StyledCardNowPryce,
  StyledCardReviews,
  StyledCardTitle
} from './StyledProductCard';

function ProductCard({
  title,
  img,
  reviews,
  lastPrice,
  nowPrice
}) {
  let verifiedTitle = title;

  if (verifiedTitle.length > 59) {
    const truncatedTitle = verifiedTitle.slice(0, 60);
    verifiedTitle = `${truncatedTitle}...`
  }

  return (
    <StyledCardItem>
      <StyledCardImg src={img} />
      <div>
        <StarRating />
        <StyledCardReviews>
          Reviews (
          {reviews}
          )
        </StyledCardReviews>
      </div>

      <StyledCardTitle>{verifiedTitle}</StyledCardTitle>

      <div>
        <StyledCardLastPrice>{lastPrice}</StyledCardLastPrice>
        <StyledCardNowPryce>{nowPrice}</StyledCardNowPryce>
      </div>
    </StyledCardItem>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  reviews: PropTypes.string,
  lastPrice: PropTypes.string,
  nowPrice: PropTypes.string,
}

ProductCard.defaultProps = {
  title: 'Apple MacBook Air 13" 256Gb Space Gray (MWTJ2) 2020',
  img: 'https://i.citrus.ua/imgcache/size_500/uploads/shop/9/9/9908770da61d5c79571f58b6be08a924.jpg',
  reviews: '4',
  lastPrice: '$599.00',
  nowPrice: '$499.00'
}

export default ProductCard;
