import styled from 'styled-components'
import { forMobile, forDesktop } from '../mediaBrakepoints'

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 0 10px;

    @media(max-width: ${forMobile.maxWidth}px){
        min-width: 320px;
    }
    @media(min-width: ${forDesktop.minWidth}px){
        max-width: 1400px;
    }
`
export default Container