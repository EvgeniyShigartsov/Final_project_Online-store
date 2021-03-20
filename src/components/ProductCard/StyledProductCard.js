import styled from 'styled-components';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { forTablet } from '../../styles/mediaBreakPoints'

export const CardItem = styled.div` 
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 5px 10px;
  border: 1px solid tomato;
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
  width: 100%;
  margin: 9px 0 6px 0;
`

export const CardReviews = styled.span`
  color: #8C8C8C;
  margin-left: 9px;
  font-size: 12px;
`

export const CardTitle = styled.h3`
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  margin: 5px 0;
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

export const RunningOutLine = styled.div`
  color: #ff5c00;
  font-size: 13px;
`

export const AddToCartIconWrapper = styled.button`
  position: relative;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    /* background-color: #e9ffee; */
    background-color: #a5f084;
  }
  &:hover::before {
    content: 'Add to cart';
    position: absolute;
    bottom: 0;
    right: -75px;
    padding: 2px 4px;
    font-size: 12px;
    border: 0.5px solid black;
    border-radius: 3px;
    background-color: white;
    z-index: 2;
  }
`

export const AddToCartIcon = styled(ShoppingCartOutlined)`
  font-size: 50px;
  z-index: 1;
  color: #78A962;
  transition: .3s;
`