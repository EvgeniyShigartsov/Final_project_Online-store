import styled from 'styled-components';
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

const Flex = styled.div`
display: flex;
// justify-content: center;
// align-items: start;
// align-content: start;
flex-wrap: wrap;
margin-top: 15px;
margin-bottom: 15px;
// Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
margin-top: 18px;
margin-bottom: 18px;
  }  
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
flex-direction: row;
align-items: stretch;
flex-wrap: nowrap;
flex-grow: 1;
margin-top: 31px;
margin-bottom: 42px;}
`
const BrendBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 172px;
width: calc(100% / 2);
&:hover{
  background-color: #EBEBEB;
  transition: opacity 0.6s ease-in-out;
}
// Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
width: calc(100% / 3);}  
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
height: 150px;
`
const Image = styled.img`
display: flex;
height: 57%;
width: 73%;
&:hover{
  background-color: #EBEBEB;
}
// Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
height: 53%;
width: 63%;
  }  
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
height: 53%;
width: 88%;
// border:1px black solid;}
`
export { Image, BrendBox, Flex };