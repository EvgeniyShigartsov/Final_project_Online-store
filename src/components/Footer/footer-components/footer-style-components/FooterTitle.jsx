import styled from 'styled-components'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const FooterTitle = styled.h2`
font-size: 18px;
font-style: normal;
font-weight: 500;
color: #FFFFFF;

@media(min-width: ${forDesktop.minWidth}px){
font-size: 38px;
}
`
export default FooterTitle