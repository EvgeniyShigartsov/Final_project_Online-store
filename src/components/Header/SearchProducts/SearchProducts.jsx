import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import PropTypes from 'prop-types';
import {
  Input, SearchInputBlock, SearchOutlinedStyled, FormContainer
} from '../HeaderStyled'

const SearchProducts = ({hideInput}) => {
  const [search, setSearch] = useState('')
  const history = useHistory()

  const onChange = (e) => {
    const {value} = e.target
    setSearch(value)
  }

  const onFinish = (e) => {
    e.preventDefault()
    if (search.length > 3) {
      history.push(`/catalog?${search}`)
    }
  }

  return (
    <FormContainer action="submit" hideInput={hideInput} onSubmit={onFinish}>
      <SearchInputBlock>
        <SearchOutlinedStyled />
        <Input value={search} onChange={onChange} name="search" type="text" placeholder="Search for goods" />
      </SearchInputBlock>
    </FormContainer>
  )
}

SearchProducts.propTypes = {
  hideInput: PropTypes.bool.isRequired
}

export default SearchProducts