import styled from 'styled-components';

const StyledCardItem = styled.li`
  list-style: none;
  width: 147px;
`

export const StyledCardImg = styled.img`
  width: 150px;
  hight: 150px;
  margin-bottom: 10px;
`

export const StyledCardReviews = styled.span`
  color: #8C8C8C;
  font-size: 10px;

  margin-left: 10px;
`

export const StyledCardTitle = styled.h2`
  font-size: 11px;
  text-align: left;

  margin-top: 10px;
`

export const StyledCardLastPrice = styled.p`
  color: #666666;
  text-decoration-line: line-through;
  font-size: 12px;

  margin-top: 10px;
`

export const StyledCardNowPryce = styled.p`
  font-size: 14px;
  font-weight: 600;

  margin-top: 5px;
`

export default StyledCardItem;
