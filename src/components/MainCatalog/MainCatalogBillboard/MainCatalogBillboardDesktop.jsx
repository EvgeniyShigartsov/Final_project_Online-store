import React from 'react'
import PropTypes from 'prop-types'
import {StyledMainCatalogBillboardDesktop, StyledMainCatalogBillboardLink, StyledMainCatalogBillboardTitle} from './StyledMainCatalogBillboard'

export const MainCatalogBillboardDesktop = ({ billboardInfo }) => {
  const { title, bgImg, urlToAllProducts} = billboardInfo

  return (
    <StyledMainCatalogBillboardDesktop bgImg={bgImg}>
      <StyledMainCatalogBillboardTitle>{title}</StyledMainCatalogBillboardTitle>
      <StyledMainCatalogBillboardLink
        href={urlToAllProducts}
        target="_blank"
      >
        see all products
      </StyledMainCatalogBillboardLink>
    </StyledMainCatalogBillboardDesktop>
  )
}

MainCatalogBillboardDesktop.propTypes = {
  billboardInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bgImg: PropTypes.string.isRequired,
    urlToAllProducts: PropTypes.string.isRequired
  }).isRequired
}

export default MainCatalogBillboardDesktop
