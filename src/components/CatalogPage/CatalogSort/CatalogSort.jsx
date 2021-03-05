/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Form, Select } from 'antd'
// import 'antd/dist/antd.css'
import PropTypes from 'prop-types';
import React from 'react'
import styled from 'styled-components'
import {forMobile, forDesktop, forTablet} from '../../../styles/mediaBreakPoints';

const CatalogSort = ({inPage, setInPage, setShowFilter}) => {
  const onChange = (value) => {
    setInPage(value)
  }
  return (
    <Wrapper>
      <FilterBtn type="submit" onClick={() => setShowFilter((prev) => !prev)}>Filter</FilterBtn>
      <Form.Item>
        <StyledSelect clearIcon={<span>Sort By</span>} onChange={onChange} defaultValue="position">
          <Select.Option value="position">Position</Select.Option>
          <Select.Option value="priceMin">Price min</Select.Option>
          <Select.Option value="priceMax">Price max</Select.Option>
        </StyledSelect>
      </Form.Item>
      <Form.Item label="Show">
        <StyledSelect onChange={onChange} defaultValue={inPage}>
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
  @media(max-width: ${forMobile.maxWidth}px) {
    display: block;
    padding: 5px 30px;
    border: none;
    border: 2px solid #CCCCCC;
    border-radius: 2px;
    background-color:#FFFFFF;
    color: black;
  }
  @media(min-width: ${forTablet.minWidth}px) {
    display: none;
  }
  @media(min-width: ${forDesktop.minWidth}px) {
    display: none;
  }
`;

CatalogSort.propTypes = {
  inPage: PropTypes.string.isRequired,
  setInPage: PropTypes.func.isRequired,
  setShowFilter: PropTypes.func.isRequired
}

export default CatalogSort