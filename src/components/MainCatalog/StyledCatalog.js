import styled from 'styled-components'
import { forDesktop, forTablet } from '../../styles/mediaBreakPoints'

export const StyledCatalogWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  min-width: 320px;

  margin-top: 30px;
  margin-left: 5%;

  @media(min-width: ${forTablet.minWidth}px) {
    flex-direction: row;
  }
  
  @media(min-width: ${forDesktop.minWidth}px){
    width: 90%;
    max-width: 1200px;

    padding: 0 10px;
    margin: 0 auto;
    margin-top: 30px;
  }
`

export const StyledCatalogCardWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow-x: scroll;

  margin-top: 15px;

  @media(min-width: ${forTablet.minWidth}px){
    grid-template-columns: repeat(4, 1fr);
    overflow-x: scroll;
  }

  @media(min-width: ${forDesktop.minWidth}px){
    grid-template-columns: repeat(4, 1fr);
    overflow-x: auto;
  }
`

export default StyledCatalogCardWrapper