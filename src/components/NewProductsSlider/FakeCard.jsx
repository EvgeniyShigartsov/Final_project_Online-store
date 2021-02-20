import styled, { css } from 'styled-components'

export const FakeCard = styled.div`
    ${(props) => css`
        background-color: ${props.color}
    `};
    height: 256px;
    margin-right: 40px;
    width: 174px;
`
export default FakeCard