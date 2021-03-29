import React from 'react'
import { connect } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import makeConfigFromUrl from '../../../utils/makeConfigFromUrl'
import makeUrlFromConfig from '../../../utils/makeUrlFromConfig'
import {StyledPagination} from './StyledCatalogPagination'

const mapStateToProps = (state) => ({
  productsQuantity: state.products.catalog.productsQuantity
})

const CatalogPagination = connect(mapStateToProps)(({
  productsQuantity
}) => {
  const {search} = useLocation()
  const history = useHistory()
  const config = search ? makeConfigFromUrl(search) : {}

  const onChange = (page) => {
    config.startPage = page
    history.push(`/catalog?${makeUrlFromConfig(config)}`)
  }

  return (
    <StyledPagination
      showSizeChanger={false}
      onChange={onChange}
      current={+config.startPage || 1}
      pageSize={+config.perPage || 16}
      total={+productsQuantity}
    />
  )
})

export default CatalogPagination