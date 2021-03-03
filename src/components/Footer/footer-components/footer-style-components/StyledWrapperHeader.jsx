import styled from 'styled-components'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const StyledWrapperHeader = styled.div`
display: flex;
flex-direction: column;
text-align: center;
margin-bottom: 16px;

@media(min-width: ${forDesktop.minWidth}px){
flex-direction: row;
margin-bottom: 45px;
}
`

export default StyledWrapperHeader