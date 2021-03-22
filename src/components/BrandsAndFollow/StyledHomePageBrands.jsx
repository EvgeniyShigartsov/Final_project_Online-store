import styled from 'styled-components';
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  min-width: 300px;
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    margin: 18px 0;
  }  
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
  background-size: cover;
  height: 172px;
  width: calc(100% / 2);
  &:hover{
    background-color: #EBEBEB;
    transition: opacity 0.6s;
  }

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: calc(100% / 3);
    height: 155px;
  }  

  @media(min-width: ${forDesktop.minWidth}px){
    height: 145px;
  }
`
const Image = styled.img`
  display: flex;
  object-fit: contain;
  height: 57%;
  width: 73%;

  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    height: 53%;
    width: 63%;
  }  

  @media(min-width: ${forDesktop.minWidth}px){
    height: 53%;
    width: 88%;
  }
`
export { Image, BrandBox, Flex };