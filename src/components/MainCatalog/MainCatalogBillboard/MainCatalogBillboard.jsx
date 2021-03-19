import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledMainCatalogBillboard, StyledMainCatalogBillboardLink, StyledMainCatalogBillboardTitle
} from './StyledMainCatalogBillboard'

export const MainCatalogBillboard = ({ billboardInfo }) => {
  const { title, img, url } = billboardInfo

  return (
    <StyledMainCatalogBillboard src={img}>
      <StyledMainCatalogBillboardTitle>{title}</StyledMainCatalogBillboardTitle>
      <StyledMainCatalogBillboardLink href={url}>view all products</StyledMainCatalogBillboardLink>
    </StyledMainCatalogBillboard>
  )
}

MainCatalogBillboard.propTypes = {
  billboardInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default MainCatalogBillboard
