import styled from 'styled-components';
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
// Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    margin: 18px 0;
  }  
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    align-items: stretch;
    flex-wrap: nowrap;
    flex-grow: 1;
    margin: 31px 0 42px 0;
  }
`
const BrandBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 172px;
  width: calc(100% / 2);
  &:hover{
    background-color: #EBEBEB;
    transition: opacity 0.6s;
  }
// Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: calc(100% / 3);
  }  
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    height: 150px;
  }
`
const Image = styled.img`
  display: flex;
  height: 57%;
  width: 73%;
// Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    height: 53%;
    width: 63%;
  }  
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    height: 53%;
    width: 88%;
  }
`
export { Image, BrandBox, Flex };