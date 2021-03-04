/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CartGroupBox, FlexBox } from './StylesCartGroup'
import InputGroup from './InputGroup/InputGroup'
import StyledButton from '../../common/Buttons/StyledButton'
import checkValue from '../../../utils/checkValue'

const CartGroup = ({ avilableQuantity }) => {
  const [quantity, setQuanity] = useState(avilableQuantity > 0 ? 1 : 0)
  
  const inputHandler = (e) => {
    const value = +e.target.value.trim()
    if (!checkValue(value, avilableQuantity)) return
    setQuanity(() => value)
  }
  const increaseHandler = () => {
    const isValid = checkValue(quantity + 1, avilableQuantity)
    return isValid ? setQuanity((prevValue) => prevValue + 1) : null
  }
  const decreaseHandler = () => {
    const isValid = checkValue(quantity - 1, avilableQuantity)
    return isValid ? setQuanity((prevValue) => prevValue - 1) : null
  }
  
  const isAvilable = avilableQuantity > 0
  return (
    <CartGroupBox>
      <div>
        {isAvilable ? `Осталось на складе: ${avilableQuantity} шт.` : 'Товар закончился.'}
      </div>
      <FlexBox>
        <InputGroup
          decreaseHandler={decreaseHandler}
          increaseHandler={increaseHandler}
          inputHandler={inputHandler}
          quantity={quantity}
        />
        <StyledButton size="lg" shape="round" disabled={!isAvilable}>Add to cart</StyledButton>
      </FlexBox>
    </CartGroupBox>
  )
}

CartGroup.propTypes = {
  avilableQuantity: PropTypes.number.isRequired
}

export default CartGroup