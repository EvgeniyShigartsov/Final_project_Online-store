import styled from 'styled-components'
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

export const WishlistBox = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    grid-gap: 10px 15px;

    @media(min-width: 505px) and (max-width: ${forTablet.maxWidth}px) {
        grid-template-columns: repeat(auto-fit, minmax(200px ,1fr));
    }
    
    @media(min-width: ${forDesktop.minWidth}px){
        grid-template-columns: repeat(4, 1fr);
    }
`
export const WishlistItem = styled.div`
    border: 1px solid tomato;
    width: 240px;
`