import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import 'antd/dist/antd.css'
import { Select } from 'antd'
import { forDesktop, forMobile, forTablet } from '../../../styles/mediaBreakPoints';

const CatalogSort = ({config, setSortAndPagination}) => {
  const {perPage} = config
  
  const onChange = (value, key) => {
    if (value !== 'default') {
      if (key === 'perPage') setSortAndPagination((prev) => ({...prev, perPage: value}))
      if (key === 'sort') setSortAndPagination((prev) => ({...prev, sort: value}))
    } else {
      setSortAndPagination((prev) => {
        const {sort, ...result} = prev
        return result
      })
    }
  }

  return (
    <Wrapper>
      <SelectWrapper>
        <span className="title-select">Sort By:</span>
        <StyledSelect bordered={false} onChange={(value) => onChange(value, 'sort')} defaultValue="default">
          <Select.Option value="default">Position</Select.Option>
          <Select.Option value="+currentPrice">From min price</Select.Option>
          <Select.Option value="-currentPrice">From max price</Select.Option>
        </StyledSelect>
      </SelectWrapper>
      <SelectWrapper>
        <span className="title-select">Show:</span>
        <StyledSelect bordered={false} onChange={(value) => onChange(value, 'perPage')} defaultValue={perPage}>
          <Select.Option value="15">15 per page</Select.Option>
          <Select.Option value="30">30 per page</Select.Option>
          <Select.Option value="45">45 per page</Select.Option>
          <Select.Option value="60">60 per page</Select.Option>
        </StyledSelect>
      </SelectWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  font-size: 10px;
  margin-bottom: 30px;
  @media (min-width: 591px){
    & {
      justify-content: flex-end;
    }
  }
`

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid rgba(204,204,204,1);
  padding: 0 10px;
  border-radius: 2px;
  font-weight: 600;

  & .title-select {
    color: rgba(204,204,204,1);
  }

  @media (max-width: ${forTablet.maxWidth}px){
    &:not(:first-child){
      display: none;
    }
  }

  @media (min-width: ${forDesktop.minWidth}px){
    & {
      font-size: 13px;
      margin-left: 11px;
    }
  }

`

const StyledSelect = styled(Select)`
  @media (max-width: ${forMobile.maxWidth}px) { 
    &{
      width: 100px;
      font-size: inherit;
    }
  }
  @media (min-width: ${forTablet.minWidth}px){
    &{
      min-width: 140px;
    }
  }
`

CatalogSort.propTypes = {
  config: PropTypes.instanceOf(Object).isRequired,
  setSortAndPagination: PropTypes.func.isRequired
}

export default CatalogSort