import React from 'react';
import PropTypes from 'prop-types';
import StyledStarFilledIcon from '../StyledStarRating';

function Star({ color }) {
  return (
    <StyledStarFilledIcon color={color} />
  )
}

Star.propTypes = {
  color: PropTypes.string
}

Star.defaultProps = {
  color: '#C4C4C4'
}

export default Star;
