import React, { useState } from 'react'
import styled from 'styled-components'
import {Container} from '../common/Container'
import Heading from '../common/Heading/Heading'
import CatalogFilter from './CatalogFilter/CatalogFilter'
// import CatalogPagination from './CatalogPagination/CatalogPagination'
import CatalogProductsPlace from './CatalogProductsPlace/CatalogProductsPlace'
import CatalogSort from './CatalogSort/CatalogSort'

const CatalogPage = () => {
  const [filterSettings, setFilterSettings] = useState({perPage: '15'})
  const config = {...filterSettings}
  return (
    <Container>
      <Heading>Catalog Page</Heading>
      <Flex>
        <CatalogFilter />
        <CatalogProducts>
          <CatalogSort
            config={config}
            setFilterSettings={setFilterSettings}
          />
          <CatalogProductsPlace
            config={config}
            setFilterSettings={setFilterSettings}
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