import styled from 'styled-components';
import {
  Menu
} from 'antd';
import { forTablet } from '../../../styles/mediaBreakPoints'

export const ContainerOrder = styled.div`
  padding-top: 30px;
  border-top: 1px solid rgba(0,0,0,0.1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 2px;
  .ant-descriptions-item-label {
    padding: 0px 13px 0px 13px !important;
  }
  .ant-descriptions-bordered .ant-descriptions-item-label {
    background-color: #ccccff;
  }
`;
export const ShowListStyled = styled.span`
  text-decoration-line: underline;
  color: #0156FF;
  cursor: pointer;
`;
export const StyledMenu = styled(Menu)`
  
  .ant-dropdown-menu {
    width: 90% !important;
  }
  .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title {
    white-space: pre-wrap;
    position: relative;
  }
  @media(max-width: ${forTablet.minWidth}px) {

  }
  @media(max-width: 800px) {
    .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title {
     font-size: 12px;
     padding: 5px !important;
   }
  }
`;
export const ImgContainer = styled.img`
  position: absolute;
  top: 0px;
  width: 40px;
  @media(max-width: 430px) {
    height: inherit;
    right: -37px;
  }
   @media(max-width: 349px) {
    right: -20px;
  }
  @media(min-width: 387px) {
    height: 100%;
    right: -40px;
  }
`;