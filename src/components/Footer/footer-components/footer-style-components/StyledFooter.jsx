import styled from 'styled-components'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const StyledFooter = styled.footer`
font-size: 12px;
line-height: 1.5;
background-color: #000000;
color: #FFFFFF;

@media(min-width: ${forDesktop.minWidth}px){    
font-size: 13px;
}
`

export default StyledFooter