import styled from 'styled-components'
import { forTablet } from '../../../styles/mediaBreakPoints';

const StyledMainCatalogCardWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 170px);
  overflow-x: scroll;

  margin-top: 15px;

  @media(min-width: ${forTablet.minWidth}px){
    grid-template-columns: repeat(5, 234px);
  }
`

export default StyledMainCatalogCardWrapper;