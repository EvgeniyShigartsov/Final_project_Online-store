/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Pagination } from 'antd'
import { setProductsToCatalog } from '../../../store/products/actionCreator'
import { forDesktop, forTablet } from '../../../styles/mediaBreakPoints'
import rateCalculator from '../../../utils/rateCalculator'
import upperCaseFirstLetter from '../../../utils/upperCaseFirstLetter'
import {ProductCard} from '../../ProductCard/ProductCard'
import { getFilteredProductsToCatalog } from '../../../store/products/middleware'

const mapStateToProps = (state) => ({
  catalogProducts: state.products.catalog.catalogProducts,
  productsQuantity: state.products.catalog.productsQuantity
})

const CatalogProductsPlace = connect(mapStateToProps, {
  setProductsToCatalog,
  getFilteredProductsToCatalog
})((
  {
    filterSettings,
    setFilterSettings,
    catalogProducts,
    productsQuantity,
    getFilteredProductsToCatalog
  }
) => {
  const onChangePage = (page) => {
    setFilterSettings((prev) => ({...prev, startPage: page}))
  }

  useEffect(() => {
    getFilteredProductsToCatalog(filterSettings)
  }, [filterSettings, getFilteredProductsToCatalog])

  return (
    <Wrapper>
      <h3>Catalog Products Place</h3>
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
      <Pagination
        onChange={onChangePage}
        defaultPageSize={+filterSettings.perPage}
        total={+productsQuantity}
      />
    </Wrapper>
  )
})

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const ProductsWrapper = styled.div`
    display: grid;
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

CatalogProductsPlace.propTypes = {
  filterSettings: PropTypes.instanceOf(Object).isRequired,
  setFilterSettings: PropTypes.func.isRequired
}

export default CatalogProductsPlace