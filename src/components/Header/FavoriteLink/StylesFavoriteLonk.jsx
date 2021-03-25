import styled from 'styled-components'
import { forDesktop } from '../../../styles/mediaBreakPoints'

export const IconWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    transform: translateY(2px);

    & svg path {
        stroke: white;
        
        @media(min-width: ${forDesktop.minWidth}px) {
            stroke: black;
        }
    }
    &:hover::after{ 
        content: 'Wishlist items';
        position: absolute;
        top: 15px;
        right: -90px;
        padding: 2px 4px;
        font-size: 12px;
        border: 0.5px solid black;
        border-radius: 3px;
        background-color: white;
        z-index: 100;
    }
`

export const Circle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: black;
    
    & span {
        font-size: 10px;
        font-weight: 600;
        color: white;
    }
    @media(min-width: ${forDesktop.minWidth}px) {
        background-color: #0157fe;
    }
    
`
export const s = styled.div``