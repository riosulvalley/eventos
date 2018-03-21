'use strict'

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import EventListItem from '../../components/event-list-item'
// import Pagination from '../../components/pagination/index'

const Page = ({ events }) => {
  return (
    <section className='page'>
      <header className='page-header'>
        <h3 className='title'>Próximos Eventos</h3>
      </header>

      {!events.length &&
        <div className='page-wrap'>
          Nenhum evento encontrado
        </div>
      }

      {!!events.length &&
        <div className='page-wrap'>
          {events.map((props, index) => (
            <EventListItem key={index} {...props} />
          ))}
          {/* <Pagination /> */}
        </div>
      }

    </section>
  )
}

Page.propTypes = {
  events: PropTypes.array.isRequired
}

const mapCityToProps = (city) => {
  const { filter } = city
  const monthsFilter = filter.months
  const cityFilter = filter.city
  return {
    events: city.events.events
      .filter((event) => {
        if (monthsFilter.selected && cityFilter.selected) {
          return event.shouldShowByMonth !== false &&
            event.shouldShowByCity !== false
        }

        if (monthsFilter.selected && !cityFilter.selected) {
          return event.shouldShowByMonth !== false
        }

        if (!monthsFilter.selected && cityFilter.selected) {
          return event.shouldShowByCity !== false
        }

        return event
      })
      .filter((event) => {
        return event.shouldShowByText !== false
      })
  }
}

export default connect(mapCityToProps)(Page)
