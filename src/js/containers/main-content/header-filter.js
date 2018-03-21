'use strict'

import React, { PropTypes } from 'react'
import FormSelect from '../../components/form-select'
import FormSearch from './form-search'

const HeaderFilter = ({
  monthFilter,
  cityFilter,
  searchField,
  handleChangeMonth,
  handleChangeCity,
  handleChangeText
}) => (
  <nav className='filter'>
    <FormSelect
      key='months'
      {...monthFilter}
      handleChange={handleChangeMonth} />

    <FormSelect
      key='cities'
      {...cityFilter}
      handleChange={handleChangeCity} />

    <FormSearch
      searchField={searchField}
      handleChangeText={handleChangeText} />
  </nav>
)

HeaderFilter.propTypes = {
  monthFilter: PropTypes.object.isRequired,
  cityFilter: PropTypes.object.isRequired,
  searchField: PropTypes.string.isRequired,
  handleChangeMonth: PropTypes.func.isRequired,
  handleChangeCity: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired
}

export default HeaderFilter
