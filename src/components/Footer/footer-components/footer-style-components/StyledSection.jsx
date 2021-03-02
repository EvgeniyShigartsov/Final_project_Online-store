import styled from 'styled-components'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const StyledSection = styled.section`
padding-top: 35px;

@media(min-width: ${forDesktop.minWidth}px){
padding-top: 45px;
}
`

export default StyledSection