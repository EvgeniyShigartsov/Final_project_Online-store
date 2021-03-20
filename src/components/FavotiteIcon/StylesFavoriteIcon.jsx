import styled, { css } from 'styled-components'
import { forDesktop } from '../../styles/mediaBreakPoints'

export const IconCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    /* border: 2px solid #8C8C8C; */
    border-radius: 50%;
    cursor: pointer;

    ${(props) => props.isFavorite && css`
        ${'' /* background-color: yellow; */}
    `}
    ${(props) => props.small && css`
        width: 25px;
        height: 25px;
    `}


    &:hover svg  {
        fill: #eb2d69;
        /* background-color: yellow; */
    }

    @media(min-width: ${forDesktop.minWidth}px) {
        &::after {
        content: 'Add to favorite!';
        display: none;
        position: absolute;
        top: 25px;
        right: -100px;
        padding: 2px 4px;
        font-size: 12px;
        border: 0.5px solid black;
        border-radius: 3px;
        background-color: white;
        z-index: 2;
        ${(props) => props.isFavorite && css`
            content: 'Unlike'; 
            right: -50px;
        `}
    }
    &:hover::after {
        display: block;
    }
} 
`
export default IconCircle
