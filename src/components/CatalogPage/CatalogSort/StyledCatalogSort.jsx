import { Select } from 'antd'
import styled from 'styled-components'
import { forDesktop, forMobile, forTablet } from '../../../styles/mediaBreakPoints'

export const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;
font-size: 10px;
margin-bottom: 30px;
@media (min-width: 591px){
  & {
    justify-content: flex-end;
  }
}
`

export const SelectWrapper = styled.div`
display: flex;
align-items: center;
border: 2px solid rgba(204,204,204,1);
padding: 0 10px;
border-radius: 2px;
font-weight: 600;

& .title-select {
  color: rgba(204,204,204,1);
}

@media (max-width: ${forTablet.maxWidth}px){
  &:not(:first-child){
    display: none;
  }
}

@media (min-width: ${forDesktop.minWidth}px){
  & {
    font-size: 13px;
    margin-left: 11px;
  }
}

`

export const StyledSelect = styled(Select)`
@media (max-width: ${forMobile.maxWidth}px) { 
  &{
    width: 100px;
    font-size: inherit;
  }
}
@media (min-width: ${forTablet.minWidth}px){
  &{
    min-width: 140px;
  }
}
`
