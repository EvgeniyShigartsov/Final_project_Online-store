/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Spin } from 'antd'
import { forDesktop, forTablet } from '../../../styles/mediaBreakPoints'
import rateCalculator from '../../../utils/rateCalculator'
import upperCaseFirstLetter from '../../../utils/upperCaseFirstLetter'
import {ProductCard} from '../../ProductCard/ProductCard'
import { getFilteredProductsToCatalog } from '../../../store/products/middleware'
import CatalogPagination from '../CatalogPagination/CatalogPagination'

const mapStateToProps = (state) => ({
  catalogProducts: state.products.catalog.catalogProducts
})

const CatalogProductsPlace = connect(mapStateToProps, {
  getFilteredProductsToCatalog
})((
  {
    config,
    setSortAndPagination,
    catalogProducts,
    getFilteredProductsToCatalog
  }
) => {
  useEffect(() => {
    getFilteredProductsToCatalog(config)
  }, [config, getFilteredProductsToCatalog])

  return (
    catalogProducts.length === 0
      ? <StyledSpin size="large" tip="Loading..." />
      : (
        <Wrapper>
          <ProductsWrapper>
            {catalogProducts.map((el) => (
              <ProductCard
                key={el.itemNo}
                title={upperCaseFirstLetter(el.name)}
                img={el.imageUrls[0]}
                previousPrice={el.previousPrice}
                currentPrice={el.currentPrice}
                isGoodsInStock={el.quantity > 0}
                {...rateCalculator(el.reviews)}
              />
            ))}
          </ProductsWrapper>
          <CatalogPagination
            config={config}
            setSortAndPagination={setSortAndPagination}
          />
        </Wrapper>
      )
  )
})

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  text-align: center;
 `
    
const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  
  @media (min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px){
      grid-gap: 15px;
      grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${forDesktop.minWidth}px){
      grid-gap: 15px;
      grid-template-columns: repeat(5, 1fr);
  }

`

const StyledSpin = styled(Spin)`
    margin: 50px auto;
`

CatalogProductsPlace.propTypes = {
  config: PropTypes.instanceOf(Object).isRequired,
  setSortAndPagination: PropTypes.func.isRequired
}

export default CatalogProductsPlace