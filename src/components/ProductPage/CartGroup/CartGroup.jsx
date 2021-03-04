import React from 'react'
import PropTypes from 'prop-types'
import { CartGroupBox, FlexBox } from './StylesCartGroup'
import InputGroup from './InputGroup/InputGroup'
import StyledButton from '../../common/Buttons/StyledButton'

const CartGroup = ({ avilableQuantity }) => (
  <CartGroupBox>
    <div>
      Отсалось на складе:
      {' '}
      {avilableQuantity}
    </div>
    <FlexBox>
      <InputGroup avilableQuantity={avilableQuantity} />
      <StyledButton size="lg" shape="round">Add to cart</StyledButton>
    </FlexBox>
  </CartGroupBox>
)

CartGroup.propTypes = {
  avilableQuantity: PropTypes.number.isRequired
}

export default CartGroup