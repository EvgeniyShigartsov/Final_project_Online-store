/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Form, Select } from 'antd'
// import 'antd/dist/antd.css'
import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'
import { forDesktop} from '../../../styles/mediaBreakPoints';

const CatalogSort = ({filterSettings, setFilterSettings, setShowFilter}) => {
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
      <FilterBtn type="submit" onClick={() => setShowFilter((prev) => !prev)}>Filter</FilterBtn>
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
const FilterBtn = styled.button`
  @media(max-width: 590px) {
    display: block;
    padding: 5px 30px;
    border: none;
    border: 2px solid #CCCCCC;
    border-radius: 2px;
    background-color:#FFFFFF;
    color: black;
    min-width: 140px;
  }
  @media(min-width: 591px) {
    display: none;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;

CatalogSort.propTypes = {
  filterSettings: PropTypes.instanceOf(Object).isRequired,
  setFilterSettings: PropTypes.func.isRequired,
  setShowFilter: PropTypes.func.isRequired
}

export default CatalogSort