import styled, { css } from 'styled-components'
import { forDesktop } from '../../../styles/mediaBreakPoints'

export const IconWrapper = styled.div`
    position: absolute;
    top: 25px;
    right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 2px solid #8C8C8C;
    border-radius: 50%;
    cursor: pointer;
    ${(props) => props.isFavorite && css`
        background-color: yellow;
    `}

    &:hover {
        background-color: yellow;
    }

    @media(min-width: ${forDesktop.minWidth}px) {
        &::after {
        content: 'Add to favorite!';
        position: absolute;
        top: 25px;
        right: -100px;
        display: none;
        padding: 2px 4px;
        font-size: 12px;
        border: 0.5px solid black;
        border-radius: 3px;
        ${(props) => props.isFavorite && css`
            content: 'Unlike.'; 
            right: -50px;
        `}
    }
    &:hover::after {
        display: block;
    }
    } 
    

`

export const d = styled.div``