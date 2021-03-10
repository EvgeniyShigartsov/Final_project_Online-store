import React, { useState } from 'react'
import {Container} from '../common/Container'
import Heading from '../common/Heading/Heading'
import CatalogFilter from './CatalogFilter/CatalogFilter'
import CatalogProductsPlace from './CatalogProductsPlace/CatalogProductsPlace'
import CatalogSort from './CatalogSort/CatalogSort'
import { CatalogProducts, Flex } from './StyledCatalogPage'

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

export default CatalogPage