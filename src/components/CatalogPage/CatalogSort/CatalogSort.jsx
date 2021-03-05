/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Form, Select } from 'antd'
// import 'antd/dist/antd.css'
import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'

const CatalogSort = ({filterSettings, setFilterSettings}) => {
  const {perPage} = filterSettings
  
  const onChange = (value) => {
    setFilterSettings((prev) => ({...prev, perPage: value}))
  }

  const onChangePosition = (value) => {
    if (value === 'default') {
      setFilterSettings((prev) => {
        const {sort, ...current} = prev
        return current
      })
    } else {
      setFilterSettings((prev) => ({...prev, sort: value}))
    }
  }
  return (
    <Wrapper>
      <Form.Item>
        <StyledSelect clearIcon={<span>Sort By</span>} onChange={onChangePosition} defaultValue="default">
          <Select.Option value="default">Position</Select.Option>
          <Select.Option value="+currentPrice">From min price</Select.Option>
          <Select.Option value="-currentPrice">From max price</Select.Option>
        </StyledSelect>
      </Form.Item>
      <Form.Item label="Show">
        <StyledSelect onChange={onChange} defaultValue={perPage}>
          <Select.Option value="15">15 per page</Select.Option>
          <Select.Option value="30">30 per page</Select.Option>
          <Select.Option value="45">45 per page</Select.Option>
          <Select.Option value="60">60 per page</Select.Option>
        </StyledSelect>
      </Form.Item>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background-color: tomato;
`

const StyledSelect = styled(Select)`
    border: none;
`

CatalogSort.propTypes = {
  filterSettings: PropTypes.instanceOf(Object).isRequired,
  setFilterSettings: PropTypes.func.isRequired
}

export default CatalogSort