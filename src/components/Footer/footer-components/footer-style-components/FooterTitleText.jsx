import styled from 'styled-components'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const FooterTitleText = styled.p`
font-style: normal;
font-weight: 300;
font-size: 13px;
align-items: center;

@media(min-width: ${forDesktop.minWidth}px){
font-size: 16px;
}
`

export default FooterTitleText