import styled from 'styled-components'

const InstaSec = styled.div`
color: #000000;
width: 103%;
height: 100%;
font-weight: 700;
`;

export const InstaSecWrapper = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 25px;
`;

export const InstaPostWrap = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin-right: 9px;
margin-bottom: 30px;
width: 233px;
height: 322px;
`;

export const PostPic = styled.img`
display: flex;
justify-content: center;
overflow: hidden;
object-fit: cover;
width: 232px;
height: 150px;
`;

export const PostText = styled.div`
display: block;
margin: 15px 25px;
font-weight: 400;
font-size: 12px;
line-height: 18px;
text-align: center;
`;

export const PostDate = styled.div`
position: absolute;
bottom: 0;
left: 50%;
width: 60px;
margin-left: -30px;
font-size: 10px;
font-weight: 400;
text-align: center;
color: #8C8C8C;
`

export default InstaSec
