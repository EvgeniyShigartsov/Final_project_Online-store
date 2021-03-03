import styled from 'styled-components';
// import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

const Flex = styled.div`
display: flex;
flex-wrap: wrap;
margin-bottom: 58px;
`
const BlockTitle = styled.p`
display: flex;
justify-content: start;
font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 33px;
margin-bottom: 21px;
`
const Posts = styled.div`
// max-width: 1200px;
display: flex;
flex-wrap: wrap;
// flex-grow: 1
`
const PostBox = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: coloumn;
justify-content: center;
width: calc(100% / 6.5 );
margin-left: 1%;
margin-bottom: 4%;
`

const Image = styled.img`
display: flex;
overflow:hidden;
height: 45%;
margin-bottom: 10px;
margin-left: 5 px;
`
const PostContent = styled.p`
display: flex;
font-family: Poppins;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
text-align: center;
margin-bottom: 10px;
padding: 10px 25px;
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
