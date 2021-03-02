import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import {
  InputBox, StyledInput, ArrowsBox, ArrowBox
} from './StylesInputGroup'

const InputGroup = ({ avilableQuantity }) => {
  const [quantity, setQuanity] = useState(1)

  const checkValue = (value) => {
    if (Number.isNaN(value) || value > avilableQuantity || value < 0) return false
    return true
  }
  const inputHandler = (e) => {
    const value = +e.target.value.trim()
    if (!checkValue(value)) return
    setQuanity(() => value)
  }
  return (
    <InputBox>
      <StyledInput onChange={inputHandler} value={quantity} />
      <ArrowsBox>
        <ArrowBox
          id="topArrow"
          onClick={() => (checkValue(quantity + 1)
            ? setQuanity((prevValue) => prevValue + 1)
            : null)}
        >
          <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.8999L3 1.8999L5 3.8999" stroke="#8C8C8C" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </ArrowBox>
        <ArrowBox
          onClick={() => (checkValue(quantity - 1)
            ? setQuanity((prevValue) => prevValue - 1)
            : null)}
        >
          <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0.820068L3 2.82007L1 0.820068" stroke="#8C8C8C" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </ArrowBox>
      </ArrowsBox>
    </InputBox>
  )
}

InputGroup.propTypes = {
  avilableQuantity: PropTypes.number.isRequired
}

export default InputGroup