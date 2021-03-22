import styled from 'styled-components';

export const SearchList = styled.div`
    position: absolute;
    background-color: #FFFFFF;
    width: 90%;
    left: 5%;
    z-index: 100000;
    text-align: center;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1)
`

export const SearchProducts = styled.div`

`

export const CloseList = styled.div`
    position: absolute;
    right: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transform: translateX(-10px);
    &:hover{
        cursor: pointer;
    }
`