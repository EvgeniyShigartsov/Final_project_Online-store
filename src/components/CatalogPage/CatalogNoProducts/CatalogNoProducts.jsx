import React from 'react'
import PropTypes from 'prop-types'
import { Empty } from 'antd'
import StyledSpinner from '../../StyledSpinner/StyledSpinner'

const CatalogNoProducts = ({productsQuantity}) => (
  productsQuantity !== 0
    ? (<StyledSpinner size="large" tip="Loading..." />)
    : (
      <Empty description={false}>
        <span>Sorry, no products</span>
      </Empty>
    )
)

CatalogNoProducts.propTypes = {
  productsQuantity: PropTypes.number.isRequired
}

export default CatalogNoProducts