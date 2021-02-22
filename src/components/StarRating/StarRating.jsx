import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';

function StarRating({ rating }) {
  return (
    <span>
      {
        [...Array(5)].map((star, indx) => {
          const ratingValue = indx + 1;

          return (
            <Star color={ratingValue <= rating ? '#E9A426' : '#C4C4C4'} key={star} />
          )
        })
      }
    </span>
  )
}

StarRating.defaultProps = {
  rating: 0
}

StarRating.propTypes = {
  rating: PropTypes.number
}

export default StarRating;
