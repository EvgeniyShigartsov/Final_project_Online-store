import styled from 'styled-components';
import { forTablet } from '../../../styles/mediaBreakPoints'

export const Circle = styled.div`
    position: absolute;
    top: -2px;
    left: 21px;
    width: 15px;
    height: 15px;
    background-color: #0157fe;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: ${forTablet.maxWidth}px) {
      left: 30px;
      background-color: black;
    }
`;
export const Amount = styled.p`
    color: white;
    font-weight: 600;
    font-size: 10px;

`;
