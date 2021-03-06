import styled from 'styled-components'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const StyledWrapperFooter = styled.div`
display: grid;
grid-template-columns: none;

@media(min-width: ${forDesktop.minWidth}px){
grid-template-columns: 60px 600px 200px;
grid-gap: 100px;
padding-bottom: 20px;
}
`

export default StyledWrapperFooter