import React, { useState } from 'react'
import {Container} from '../common/Container'
import Heading from '../common/Heading/Heading'
import CatalogFilter from './CatalogFilter/CatalogFilter'
import CatalogProductsPlace from './CatalogProductsPlace/CatalogProductsPlace'
import CatalogSort from './CatalogSort/CatalogSort'

const CatalogPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterSettings, setFilterSettings] = useState({perPage: '15'})
  const [filter, setFilter] = useState({});
  // eslint-disable-next-line no-unused-vars
  const config = {...filterSettings, ...filter};

  return (
    <Container>
      <Heading>Catalog Page</Heading>
      <div style={{display: 'flex' }}>
        <CatalogFilter
          setFilter={setFilter}
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <CatalogSort
            setShowFilter={setShowFilter}
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