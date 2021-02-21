import React from 'react';
import Star from './Star';

function StarRating() {
  const stars = [1, 2, 3, 4, 5];

  return (
    <span>
      {
        stars.map(() => (
          <Star />
        ))
      }
    </span>
  )
}

export default StarRating;
