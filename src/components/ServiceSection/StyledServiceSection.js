import styled from 'styled-components'
import { forTablet, forMobile } from '../../styles/mediaBreakPoints'

export const ItemWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
padding: 60px 0 45px;

@media(max-width: ${forMobile.maxWidth}px) {
    flex-direction: column;
    align-items: center;
    padding: 25px 0 25px;
}
`;

const Item = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 256px;
height: 168px;

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 212px;
    height: 125px;
};

@media(max-width: ${forMobile.maxWidth}px){
    width: 212px;
    height: 125px;
}
`;

export const Round = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 65px;
height: 65px;
border-radius: 50%;
background: #0156FF;

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 45px;
    height: 45px;
};

@media(max-width: ${forMobile.maxWidth}px){
    width: 45px;
    height: 45px;
}
`;

export const Img = styled.img`
width: 25px;
height: 25px;

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
    width: 18px;
    height: 18px;
};

@media(max-width: ${forMobile.maxWidth}px){
    width: 18px;
    height: 18px;
}`;

export const Service = styled.div`
font-size: 18px;
font-weight: 700;

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) and (max-width: ${forMobile.maxWidth}px) {
    font-size: 14px;
};

@media(max-width: ${forMobile.maxWidth}px){
    font-size: 14px;
}
`;

export const Description = styled.div`
text-align: center;
font-size: 14px;
font-weight: 400;
line-height: 19px;

@media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) and (max-width: ${forMobile.maxWidth}px) {
    font-size: 11.5px;
    line-height: 16px;
};

@media(max-width: ${forMobile.maxWidth}px){
    font-size: 11.5px;
    line-height: 16px;
    padding-bottom: 10px;
}`;

export default Item