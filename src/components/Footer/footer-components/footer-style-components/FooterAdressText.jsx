import styled from 'styled-components'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const FooterTextContacts = styled.p`
font-size: 12px;
font-weight: 300;
font-style: normal;
align-items: center;
padding-top: 5px;

@media(min-width: ${forDesktop.minWidth}px){
font-size: 13px;
}
`

export default FooterTextContacts