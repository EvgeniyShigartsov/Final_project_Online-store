import styled from 'styled-components';
import { forTablet } from '../../styles/mediaBreakPoints'

export const CardItem = styled.div` 
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 235px;
  padding: 10px 15px;
  border: 1px solid lightskyblue;
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 100%;
`

export const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

export const ReviewsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 9px 0;
`
export const RatingBox = styled.div`
  display: flex;
  justify-content: center;


  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const CardReviews = styled.span`
  color: #8C8C8C;
  font-size: 12px;
  margin-top: 4px;
  margin-left: 9px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
  }
`

export const CardTitle = styled.h3`
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  margin: 10px 0;
  text-align: left;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 13px;
    line-height: 19.5px;
  }
`

export const PurchaseGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const CardLastPrice = styled.div`
  font-size: 12px;
  text-decoration-line: line-through;
  color: #666666;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 14px;
  }
`

export const CardCurrentPrice = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: black;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 18px;
  }
`
