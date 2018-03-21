'use strict'

import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import HeaderBanner from './header-banner'
import HeaderFilter from './header-filter'
import {
  fetchEvents,
  chooseFilterSelect,
  filterByText
} from '../../actions/index'

class Header extends Component {
  componentDidMount () {
    this.props.dispatch(fetchEvents())
  }

  handleChange (field, event) {
    const { value } = event.currentTarget
    this.props.dispatch(chooseFilterSelect({ field, value }))
  }

  handleChangeText (event) {
    this.props.dispatch(filterByText(event.currentTarget.value))
  }

  render () {
    const { events, monthFilter, cityFilter, searchField } = this.props
    return (
      <header className='wellness'>
        <h1 className='title'>
          Fique por dentro de todos os eventos na comunidade.
        </h1>

        <HeaderBanner events={events} />
        <HeaderFilter
          monthFilter={monthFilter}
          cityFilter={cityFilter}
          searchField={searchField}
          handleChangeMonth={(e) => this.handleChange('months', e)}
          handleChangeCity={(e) => this.handleChange('city', e)}
          handleChangeText={(e) => this.handleChangeText(e)}
        />
      </header>
    )
  }
}

Header.defaultProps = {
  searchField: ''
}

Header.propTypes = {
  events: PropTypes.array.isRequired,
  monthFilter: PropTypes.object.isRequired,
  cityFilter: PropTypes.object.isRequired,
  searchField: PropTypes.string.isRequired
}

const mapCityToProps = (city) => ({
  events: city.events.events.filter((_, index) => index < 5),
  monthFilter: city.filter.months,
  cityFilter: city.filter.city,
  searchField: city.filter.searchField
})

export default connect(mapCityToProps)(Header)
