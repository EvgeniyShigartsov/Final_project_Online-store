import styled from 'styled-components'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const FooterStyledText = styled.div`
font-style: normal;
font-weight: 400;
font-size: 13px;
text-align: left;

@media(min-width: ${forDesktop.minWidth}px){
font-size: 14px;
}
`

export default FooterStyledText