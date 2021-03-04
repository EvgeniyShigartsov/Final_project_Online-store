/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { getFilteredProducts, getProducts } from '../../../store/products/middleware'
import { forDesktop, forTablet } from '../../../styles/mediaBreakPoints'
import rateCalculator from '../../../utils/rateCalculator'
import upperCaseFirstLetter from '../../../utils/upperCaseFirstLetter'
import {ProductCard} from '../../ProductCard/ProductCard'

const mapStateToProps = (state) => ({
  products: state.products.products
})

const CatalogProductsPlace = connect(mapStateToProps, {getProducts, getFilteredProducts})((
  {
    products,
    getProducts,
    getFilteredProducts
  }
) => {
  const filter = async () => {
    const res = await getFilteredProducts({perPage: '23'})
    console.log(res)
  }

  filter()

  useEffect(() => {
    getProducts()
  }, [getProducts])
  return (
    <Wrapper>
      <h3>Catalog Products Place</h3>
      <ProductsWrapper>
        {products.map((el) => (
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

export default CatalogProductsPlace