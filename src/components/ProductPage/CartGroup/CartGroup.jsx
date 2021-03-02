/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CartGroupBox } from './StylesCartGroup'
import InputGroup from './InputGroup/InputGroup'
import StyledButton from '../../common/Buttons/StyledButton'

const CartGroup = ({ avilableQuantity }) => (
  <CartGroupBox>
    <InputGroup avilableQuantity={avilableQuantity} />
    <StyledButton size="lg" shape="round">Add to cart</StyledButton>
  </CartGroupBox>
)

CartGroup.propTypes = {
  avilableQuantity: PropTypes.number.isRequired
}

export default CartGroup