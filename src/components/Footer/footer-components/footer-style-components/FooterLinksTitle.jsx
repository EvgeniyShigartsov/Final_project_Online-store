import styled from 'styled-components'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const FooterLinksTitle = styled.h4`
font-size: 13px;
font-style: normal;
font-weight: bold;
align-items: center;
color: rgba(255, 255, 255, 0.5);
margin-bottom: 12px;

@media(min-width: ${forDesktop.minWidth}px){
font-size: 16px;
margin-bottom: 30px;
}
`

export default FooterLinksTitle