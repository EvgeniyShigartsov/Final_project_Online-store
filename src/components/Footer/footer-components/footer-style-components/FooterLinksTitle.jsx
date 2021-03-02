import styled from 'styled-components'
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const FooterLinksTitle = styled.label`
font-size: 13px;
font-style: normal;
font-weight: bold;
align-items: center;
color: rgba(255, 255, 255, 0.5);
margin-bottom: 12px;
padding: 14px 20px;  
display: block;
cursor: pointer;
position: relative;
transition: background 0.1s;

&:hover {
  background: rgba(0, 0, 0, 0.1);
}

&::after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  width: 12px;
  height: 6px;
  background-image: url('data:image/svg+xml;utf8,<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 100,0 50,50" style="fill:%23FFFFFF99;" /></svg>');
  background-size: contain;
  transition: transform 0.4s;
  }


@media(min-width: ${forDesktop.minWidth}px){
font-size: 16px;
margin-bottom: 30px;

&::after{
    display: none;
}
}
`

export default FooterLinksTitle