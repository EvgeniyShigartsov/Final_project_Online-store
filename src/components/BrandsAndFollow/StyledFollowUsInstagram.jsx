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
    margin-bottom: 10px;
  }
`
const BlockTitle = styled.p`
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    justify-content: start;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
  }
`
const Posts = styled.div`
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 21px;
  }
`
const PostBox = styled.div`
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    // display: inline-flex;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: coloumn;
    justify-content: center;
    width: calc(100% / 6.5 );
    margin: 0 0 6% 1%;
  }
`
const Image = styled.img`
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    overflow: hidden;
    height: 45%;
    margin-left: 5px;
  }
`
const PostContent = styled.p`
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    padding: 10px 15px;
    color: #000000;
  }
`
const PostDate = styled.p`
// Desktop
  @media(min-width: ${forDesktop.minWidth}px){
    display: flex;
    justify-content: center;
    font-size: 12px;
    line-height: 18px;
    display: flex;
    color: #8C8C8C;
  }
`
export
{
  Flex, BlockTitle, Posts, PostBox, Image, PostContent, PostDate
};
