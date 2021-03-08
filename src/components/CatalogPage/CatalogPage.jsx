import React, { useState } from 'react'
import styled from 'styled-components'
import {Container} from '../common/Container'
import Heading from '../common/Heading/Heading'
import CatalogFilter from './CatalogFilter/CatalogFilter'
import CatalogProductsPlace from './CatalogProductsPlace/CatalogProductsPlace'
import CatalogSort from './CatalogSort/CatalogSort'

const CatalogPage = () => {
  const [sortAndPagination, setSortAndPagination] = useState({perPage: '15'})
  const config = {...sortAndPagination}

  return (
    <Container>
      <Heading>Products</Heading>
      <Flex>
        <CatalogFilter />
        <CatalogProducts>
          <CatalogSort
            config={config}
            setSortAndPagination={setSortAndPagination}
          />
          <CatalogProductsPlace
            config={config}
            setSortAndPagination={setSortAndPagination}
          />
        </CatalogProducts>
      </Flex>
    </Container>
  )
}

const CatalogProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch; 
  font-family: inherit;
  width: 100%;
  min-height: 80%
`

const Flex = styled.div`
  display: flex;
`

export default CatalogPage