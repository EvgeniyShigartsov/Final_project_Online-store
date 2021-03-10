import styled, {css} from 'styled-components';
import {
  Form,
  InputNumber,
  Menu,
} from 'antd';
import { forDesktop, forTablet} from '../../../styles/mediaBreakPoints';

export const StyledForm = styled(Form)`
  background: #F5F7FF;
  @media(min-width: 591px) {
      min-width: 27%;
  } 
  @media(min-width: ${forDesktop.minWidth}px) {
      min-width: 20%;
  } 
`;

export const StyledMenuItem = styled(Menu.Item)`
  @media(min-width: ${forDesktop.minWidth}px) {
    padding-left: 20px !important;
  } 
  @media(min-width: ${forTablet.minWidth}px) {
    padding: 0px 0px 0px 10px !important;
    font-size: 2px !important;
  } 
`;
export const Wrapper = styled.aside`
    @media(max-width: 590px) {
      position: absolute;
      top: 0%;
      left: -100%;
      width: 50%;
      height: 100%;
      background: #ECECEC;
      transition: all 0.5s ease-out;
      opacity: 0;
      z-index: 10;
      ${(props) => (props.showFilter && css`
        left: 0%;
        opacity: 1;
      `)}
  }
`;

export const FilterTitle = styled.div`
  @media(max-width: 591px) {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 35px;
    background: #ECECEC;
      h3{
      font-size: 20px;
      font-weight: bold;
    }
  }
  @media(min-width: 592px) {
    padding: 15px 20px;
    justify-content: center;
    width: 100%;
    h3{
      font-size: 21px;
      font-weight: bold;
      text-align: center;
    }
  }
`;
export const FormItemWrapper = styled(Form.Item)`
  @media(max-width: 591px) {
    text-align: right !important;
    padding-right: 20px !important;
    position: relative;
  }
  @media(min-width: 592px) {
    padding-left: 20px !important;
  }
`;
export const FromTag = styled.h6`
  position: absolute;
  top: 35px;
  left: 30px;
  @media(min-width: 591px) {
    display: none;
  }
`;
export const ToTag = styled.h6`
  position: absolute;
  top: 35px;
  left: 30px;
  @media(min-width: 591px) {
    display: none;
  }
`;
export const InputFrom = styled(InputNumber)`
  @media(max-width: 591px) {
    width: 70% !important;
    border: 0.5px solid rgba(0,0,0,0.5) !important;
  }
  @media(min-width: 592px) {
    width: 90% !important;

  }
`;
export const InputTo = styled(InputNumber)`
  @media(max-width: 591px) {
    width: 70% !important;
    border: 0.5px solid rgba(0,0,0,0.5) !important;
  }
  @media(min-width: 592px) {
    width: 80% !important;
    margin-left: 15px;
  }
`;
export const CloseBtn = styled.div`
  @media(max-width: 591px) {
    cursor: pointer;
  }
  @media(min-width: 591px) {
    display: none;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;
export const StyledMenu = styled(Menu)`
  min-width: 20%;
`;
export const LI = styled(Menu.Item)`
  padding-left: 10px !important;
  @media(max-width: ${forTablet.maxWidth}px) {
    padding-right: 0px !important;
  }
`;
export const AlignBtn = styled.div`
  margin-top: 20px;
  @media(max-width: 591px) {
    width: 90%;
    display: flex;
    justify-content: center;
    padding-top: 30px;
  }
  @media(min-width: 592px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const AllBrandsTitle = styled.div`
  @media(max-width: 591px) {
    display: none;
  }
  @media(min-width: 592px) {
    border-top: 7px solid white;
    margin-top: 50px;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h5{
      font-size: 20px;
    }
  }
  
`;
export const GridFilterPart = styled.div`
  @media(max-width: 591px) {
    display: none;
  }
  @media(min-width: 592px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }
`;
export const ContainerBrandsImg = styled.div`
  text-align: center;
  display: block;
`;
export const WishList = styled.div`
  @media(max-width: 591px) {
    display: none;
  }
  margin-top: 50px;
  height: 120px;
  border-top: 7px solid white;
  border-bottom: 7px solid white;
  h5{
    text-align: center;
    font-size: 20px;
    padding-top: 10px;
    color: black;
  }
`;

export const NoWishItem = styled.div`
  padding: 0px 5px 0px 5px;
  p{
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
  }
`;
export const WishItem = styled.div`
  padding: 0px 5px 0px 5px;
  p{
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
  }
`;
export const ContainerImage = styled.div`
  @media(max-width: 591px) {
    display: none;
  }
  @media(min-width: 591px) {
    text-align: center;
    display: block;
    img{
      width: 100%;
    }
  }
`;