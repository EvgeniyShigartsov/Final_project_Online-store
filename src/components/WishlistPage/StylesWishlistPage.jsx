import styled from 'styled-components'

export const WishlistBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-gap: 10px 15px;
`
export const WishlistItem = styled.div`
    border: 1px solid tomato;
    width: 240px;
`