import React from 'react'
import PropTypes from 'prop-types'
import {StyledMainCatalogBillboardMobile, StyledMainCatalogBillboardLink, StyledMainCatalogBillboardTitle} from './StyledMainCatalogBillboard'

export const MainCatalogBillboardMobile = ({ billboardInfo }) => {
  const { title, bgImg, urlToAllProducts} = billboardInfo

  return (
    <StyledMainCatalogBillboardMobile bgImg={bgImg}>
      <StyledMainCatalogBillboardTitle>{title}</StyledMainCatalogBillboardTitle>
      <StyledMainCatalogBillboardLink
        href={urlToAllProducts}
        target="_blank"
      >
        see all products
      </StyledMainCatalogBillboardLink>
    </StyledMainCatalogBillboardMobile>
  )
}

MainCatalogBillboardMobile.propTypes = {
  billboardInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    bgImg: PropTypes.string.isRequired,
    urlToAllProducts: PropTypes.string.isRequired
  }).isRequired
}

export default MainCatalogBillboardMobile