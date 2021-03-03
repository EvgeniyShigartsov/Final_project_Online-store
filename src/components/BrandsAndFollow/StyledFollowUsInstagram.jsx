import styled from 'styled-components';
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

const Flex = styled.div`
display: none;
// Tablet
  @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
display: none;
  }
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
display: flex;
flex-wrap: wrap;
margin-bottom: 38px;
}
`
const BlockTitle = styled.p`
display: flex;
justify-content: start;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 33px;
`
const Posts = styled.div`
max-width: 1200px;
display: flex;
flex-wrap: wrap;
margin-top: 21px;
`
const PostBox = styled.div`

display: inline-flex;
align-items: center;
flex-wrap: wrap;
flex-direction: coloumn;
justify-content: center;
width: calc(100% / 6.5 );
margin-left: 1%;
margin-bottom: 5%;
`

const Image = styled.img`
display: flex;
overflow:hidden;
height: 45%;
margin-left: 5 px;
`
const PostContent = styled.p`
display: flex;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
text-align: center;
padding: 10px 15px;
color: #000000;
`
const PostDate = styled.p`
display: flex;
justify-content: center;
font-family: Poppins;
font-size: 12px;
line-height: 18px;
display: flex;
color: #8C8C8C;
`
export
{
  Flex, BlockTitle, Posts, PostBox, Image, PostContent, PostDate
};
