import React, { useState } from 'react'
import {Container} from '../common/Container'
import Heading from '../common/Heading/Heading'
import CatalogFilter from './CatalogFilter/CatalogFilter'
import CatalogProductsPlace from './CatalogProductsPlace/CatalogProductsPlace'
import CatalogSort from './CatalogSort/CatalogSort'

const CatalogPage = () => {
  const [filterSettings, setFilterSettings] = useState({perPage: '15'})
  return (
    <Container>
      <Heading>Catalog Page</Heading>
      <div style={{display: 'flex' }}>
        <CatalogFilter />
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <CatalogSort
            filterSettings={filterSettings}
            setFilterSettings={setFilterSettings}
          />
          <CatalogProductsPlace
            filterSettings={filterSettings}
            setFilterSettings={setFilterSettings}
          />
        </div>
      </div>
    </Container>
  )
}

export default CatalogPage