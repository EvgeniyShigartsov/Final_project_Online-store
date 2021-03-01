import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const FooterAdressLink = styled(Link)`
font-size: 12px;
font-weight: 300;
font-style: normal;
align-items: center;
color: 00008B;

@media(min-width: ${forDesktop.minWidth}px){
font-weight: 400;
}
`

export default FooterAdressLink