import styled from 'styled-components'

export const ItemWrapper = styled.div`
// border: 1px solid #C3082A;
display: flex;
flex-direction: row;
justify-content: space-around;
padding: 60px 0 45px;
`;

const Item = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
// border: 1px solid #000000;
width: 256px;
height: 168px;
`;

export const Round = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 65px;
height: 65px;
border-radius: 50%;
background: #0156FF;
`;

export const Service = styled.div`
font-size: 18px;
font-weight: 700;
`;

export const Description = styled.div`
text-align: center;
font-size: 14px;
font-weight: 400;
line-height: 19px;
`;

export default Item