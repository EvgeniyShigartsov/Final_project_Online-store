import styled from 'styled-components'
import { Container } from '../common/Container'
import { forDesktop, forTablet } from '../../styles/mediaBreakPoints'

export const StyledContainer = styled(Container)`
  margin-top: 37px;
`

export const StyledCatalogWrapper = styled.div`
  margin-bottom: 15px;
`

export const StyledCatalogCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;

  grid-gap: 15px 0;
  
  width: 100%;

  margin-top: 15px;

  @media (min-width: 821px) and (max-width: ${forTablet.maxWidth}px){
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${forTablet.minWidth}px) and (max-width: 821px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media(min-width: ${forDesktop.minWidth}px){
    grid-template-columns: repeat(4, 234px);
  }
`

export default StyledCatalogCardWrapper