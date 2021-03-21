import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { forDesktop, forTablet } from '../../../styles/mediaBreakPoints'

export const CatalogBillboardWrapper = styled.div`
  position: relative;
  z-index: 0;

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

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

export const CatalogBillboardTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 700;
  line-height: 23px;

  margin-top: 10px;
  margin-bottom: 10px;

  @media(min-width: ${forTablet.minWidth}px){
    margin-top: 140px;
  }
`

export const CatalogBillboardLink = styled(Link)`
  display: inline-block;
  color: #fff;
  font-size: 12px;
  text-transform: capitalize;
  text-align: center;

  margin-top: 0;

  :hover {
    color: #fff;
    text-decoration: underline;
  }

  @media(min-width: ${forTablet.minWidth}px){
    font-size: 13px;
    margin-top: 110px;
  }
`

export default CatalogBillboardWrapper