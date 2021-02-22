import React from 'react'
import { StarFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';

function Star({ color }) {
  return (
    <StarFilled style={{ fontSize: '10px', color: `${color}`}} />
  )
}

Star.propTypes = {
  color: PropTypes.string
}

Star.defaultProps = {
  color: '#C4C4C4'
}

export default Star;
