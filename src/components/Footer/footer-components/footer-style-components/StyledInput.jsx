import styled from 'styled-components'
import { Input } from 'antd';
import { forDesktop } from '../../../../styles/mediaBreakPoints'

const StyledInput = styled(Input)`
background-color: #000000;
border: 1px solid #FFFFFF;
width: 140px;
height: auto;
margin: 20px 10px 0 0;
font-size: 10px;

@media(min-width: ${forDesktop.minWidth}px){
width: 391px;
height: auto;
margin: 28px 23px 0 0;
}
`
export default StyledInput
