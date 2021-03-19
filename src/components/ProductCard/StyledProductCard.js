import styled from 'styled-components';
import {ShoppingCartOutlined } from '@ant-design/icons';
import { forTablet } from '../../styles/mediaBreakPoints'

export const StyledCardItem = styled.div`
  margin-top: 10px;

  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 215px;
  padding: 5px 10px;

  border: 1px solid tomato;
`
export const StyledCardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;
  width: 100px;

  margin: 0 auto;
  margin-bottom: 3px;
`

export const StyledCardImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`

export const StyledCardTitle = styled.h2`
  margin-top: 5px;

  font-size: 11px;
  line-height: 16px;
  /* height: 2.3rem; */
  overflow: hidden;


  @media(min-width: ${forTablet.minWidth}px){
    font-size: 13px;
    line-height: 19px;

    margin-top: 10px;
  }
`

export const StyledCardPriceWrapper = styled.div`
  height: 60px;

  @media(min-width: ${forTablet.minWidth}px){
    height: 70px;
  }
`

export const StyledCardLastPrice = styled.p`
  color: #666666;
  text-decoration-line: line-through;
  font-size: 12px;

  margin-top: 5px;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 14px;
    margin-top: 10px;
  }
`

export const StyledCardNowPrice = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: black;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 18px;
  }
`

export const StyledCardAreRunningOut = styled.div`
  color: #ff5c00;
  font-size: 13px;
`

export const StyledCardReviews = styled.span`
  color: #8C8C8C;
  font-size: 10px;

  margin-left: 10px;

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 13px;
  }
`

export const RatingBox = styled.div`
  margin-bottom: 5px;
`

export const StyledCardIconAddToCartWrapper = styled.button`
  position: absolute;
  top: 9px;
  right: 13px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  background-color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  margin-bottom: 4px;
  padding: 0;
  
  :hover {
    background-color: #e9ffee;
  }
`
export const FavoriteIconBox = styled.div`
  position: absolute;
  top: 14px;
  right: 45px;
`

export const StyledCardIconAddToCart = styled(ShoppingCartOutlined)`
  color: #78A962;
  font-size: 20px;

  transition: .3s;
  z-index: 1;

  padding: 3px;
`

export default StyledCardItem;