import styled from 'styled-components';
import { forDesktop } from '../../styles/mediaBrakepoints'

const StyledCardItem = styled.li`
  list-style: none;
  width: 147px;
  padding: 5px 13px;

  @media(min-width: ${forDesktop.minWidth}px){
    padding: 5px 24px;
  }
`

export const StyledCardImg = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 5px;

  @media(min-width: ${forDesktop.minWidth}px){
    width: 150px;
    hight: 150px;
    margin-bottom: 10px;
  }

`

export const StyledCardReviews = styled.span`
  color: #8C8C8C;
  font-size: 10px;

  margin-left: 10px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 12px;
  }
`

export const StyledCardTitle = styled.h2`
  font-size: 11px;
  line-height: 16px;

  margin-top: 5px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 13px;
    line-height: 19px;

    margin-top: 10px;
  }
`

export const StyledCardLastPrice = styled.p`
  color: #666666;
  text-decoration-line: line-through;
  font-size: 12px;

  margin-top: 5px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 14px;
    margin-top: 10px;
  }
`

export const StyledCardNowPryce = styled.p`
  font-size: 14px;
  font-weight: 600;

  margin-top: 3px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 18px;
    margin-top: 6px;
  }
`

export default StyledCardItem;
