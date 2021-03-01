import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const FooterLinkItem = styled(Link)`
font-size: 12px;
font-style: normal;
align-items: center;
text-decoration: none;
color: #ffffff;
display: block;
padding-top: 5px;
padding-left: 10px;

@media(min-width: ${forDesktop.minWidth}px){
font-size: 13px;
padding-left: 0;
}
`

export default FooterLinkItem