import React from 'react'
import PropTypes from 'prop-types'

import { ProductCard } from '../../ProductCard/ProductCard'
import StyledMainCatalogCardWrapper from './StyledMainCatalogCardWrapper'

export const MainCatalogCardWrapper = ({ productsList }) => (
  <StyledMainCatalogCardWrapper>
    {
      productsList.map((productsItem) => (
        <ProductCard
          key={productsItem.itemNo}
          productInfo={productsItem}
        />
      ))
    }
  </StyledMainCatalogCardWrapper>
)

MainCatalogCardWrapper.propTypes = {
  productsList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.number).isRequired,
    quantity: PropTypes.number.isRequired,
    previousPrice: PropTypes.number.isRequired,
    currentPrice: PropTypes.number.isRequired,
    itemNo: PropTypes.string.isRequired
  })).isRequired
}

export default MainCatalogCardWrapper
