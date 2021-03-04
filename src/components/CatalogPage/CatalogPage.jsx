import React, { useState } from 'react'
import {Container} from '../common/Container'
import Heading from '../common/Heading/Heading'
import CatalogFilter from './CatalogFilter/CatalogFilter'
import CatalogProductsPlace from './CatalogProductsPlace/CatalogProductsPlace'
import CatalogSort from './CatalogSort/CatalogSort'

const CatalogPage = () => {
  const [productsInPage, setProductsInPage] = useState('30')
  console.log(productsInPage)
  return (
    <Container>
      <Heading>Catalog Page</Heading>
      <div style={{display: 'flex' }}>
        <CatalogFilter />
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <CatalogSort inPage={productsInPage} setInPage={setProductsInPage} />
          <CatalogProductsPlace inPage={productsInPage} />
        </div>
      </div>
    </Container>
  )
}

export default CatalogPage