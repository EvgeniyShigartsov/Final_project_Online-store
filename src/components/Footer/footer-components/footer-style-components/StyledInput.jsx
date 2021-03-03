import styled from 'styled-components'
import { Input } from 'antd';
import { forDesktop, forTablet } from '../../../../styles/mediaBreakPoints'

const StyledInput = styled(Input)`
background-color: #000000;
border: 1px solid #FFFFFF;
width: 186px;
height: 38px;
margin-right: 23px;

@media(min-width: ${forTablet.minWidth}px){
    
}

@media(min-width: ${forDesktop.minWidth}px){
width: 391px;
height: 50px;
margin-right: 23px;
}
`
export default StyledInput
