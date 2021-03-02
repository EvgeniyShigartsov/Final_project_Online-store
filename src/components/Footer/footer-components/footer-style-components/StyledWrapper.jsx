import styled from 'styled-components'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const StyledWrapper = styled.div`
display: flex;
flex-direction: column;

@media(min-width: ${forDesktop.minWidth}px){
flex-direction: row;
justify-content: space-between;
margin: 35px 0 35px 0;
}
`

export default StyledWrapper