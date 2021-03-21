import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { forDesktop, forTablet } from '../../../styles/mediaBreakPoints'

export const StyledMainCatalogBillboard = styled.div`
  position: relative;
  z-index: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 95%;
  min-width: 15vw;
  height: 82px;

  text-align: center;
  word-wrap: break-word;

  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 10px;
  margin: auto 0;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, .5);
  }

  @media(min-width: ${forTablet.minWidth}px){
    max-width: 234px;
    height: 335px;

    margin-right: 15px;
  }

  @media(min-width: ${forDesktop.minWidth}px){
    min-width: 234px;
    height: 342px;
  }
`

export const StyledMainCatalogBillboardTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 700;
  line-height: 23px;

  margin-bottom: 10px;
`

export const StyledMainCatalogBillboardLink = styled(Link)`
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 0);

  display: inline-block;
  width: 90%;

  color: #fff;
  font-size: 12px;
  text-transform: capitalize;
  text-align: center;
  cursor: pointer;

  margin-top: 95px;

  :hover {
    color: #fff;
    text-decoration: underline;
  }

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 13px;
    bottom: 30px;
  }
`

export default StyledMainCatalogBillboard