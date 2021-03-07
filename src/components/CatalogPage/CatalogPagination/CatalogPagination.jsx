import React, { useState } from 'react'
import { Pagination } from 'antd'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

const mapStateToProps = (state) => ({
  productsQuantity: state.products.catalog.productsQuantity
})

const CatalogPagination = connect(mapStateToProps)(({
  config,
  setFilterSettings,
  productsQuantity
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  
  const onChangePage = (page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setFilterSettings((prev) => ({
      ...prev,
      startPage: page
    }))
    setCurrentPage(+page)
  }

  return (
    <StyledPagination
      showSizeChanger={false}
      onChange={onChangePage}
      current={currentPage}
      pageSize={+config.perPage}
      total={+productsQuantity}
    />
  )
})

const StyledPagination = styled(Pagination)`
    margin: 20px auto;
    & .ant-pagination-item,
    .ant-pagination-item-link{
      border-radius: 50%;
    }
    & .ant-pagination-item-active{
      font-weight: 600;
    }
`

CatalogPagination.propTypes = {
  config: PropTypes.instanceOf(Object).isRequired,
  setFilterSettings: PropTypes.func.isRequired
}

export default CatalogPagination