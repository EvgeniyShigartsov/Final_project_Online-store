import styled, { css } from 'styled-components'

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
    background-color: transparent;
    cursor: pointer;    

    &:hover {
        background-color: yellow;
    }
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

`

export const d = styled.div``