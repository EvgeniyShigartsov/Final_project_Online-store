import styled from 'styled-components'

const Input = styled.input`
display: none;

&:checked ~ div {
  display: block;
}

&:checked ~ label::after {
  transform: translateY(-50%) rotate(0.5turn);
}
`
export default Input