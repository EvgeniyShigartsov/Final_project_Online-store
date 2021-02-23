import React from 'react';
import StyledCheckAvailabilityWrapper, { StyledCheckAvailabilityIcon, StyledCheckAvailabilityText } from './StyledCheckAvailability';

function CheckAvailability() {
  return (
    <StyledCheckAvailabilityWrapper>
      <StyledCheckAvailabilityIcon />
      <StyledCheckAvailabilityText>check availability</StyledCheckAvailabilityText>
    </StyledCheckAvailabilityWrapper>
  )
}

export default CheckAvailability;
