import styled from 'styled-components'
import { forTablet, forMobile } from '../../styles/mediaBreakPoints'

export const RoundDots = styled.div`
  position: relative;
  width: 15px;
  height: 15px;
  top: -35px;
  border-radius: 50%;
  background: #CCCCCC;

  @media(max-width: ${forMobile.maxWidth}px){
   top: -10px;
   width: 10px;
   height: 10px;
  }
`;

const ReviewWrapper = styled.div`
  display: block;
`;

export const ReviewTextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  width: 922px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 600px;
    font-size: 14px;
    line-height: 20px;
  };
  @media(min-width: 993px) and (max-width: 1024px) {
    width: 800px;
  }
  @media(max-width: ${forMobile.maxWidth}px){
    width: 300px;
    font-size: 12px;
    line-height: 18px;
  }

  // border: 1px solid #0156FF;
`;

export const ReviewIcon = styled.img`
  display: block;
  margin-right: 25px;
  height: 22px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    margin-right: 17px;
  };
  @media(max-width: ${forMobile.maxWidth}px) {
    height: 15px;
    width: 31px;
  }
`;

export const ReviewText = styled.p`
  display: block;
  font-size: 18px;
  line-height: 27px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 622px;
    font-size: 13px;
    line-height: 19px;
  };
  @media(max-width: ${forMobile.maxWidth}px){
    width: 345px;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const ReviewAuthor = styled.p`
  float: right;
  font-size: 14px;
  line-height: 21px;
  margin-top: 10px;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    font-size: 10px;
    margin-top: 5px;
  };
  @media(max-width: ${forMobile.maxWidth}px) {
    font-size: 10px;
    margin-top: 5px;
  }
`;

export default ReviewWrapper;