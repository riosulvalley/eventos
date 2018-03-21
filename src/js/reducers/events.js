'use strict'

import {
  FETCH_EVENTS,
  EVENTS_SUCCESS,
  EVENTS_FAILED,

  CHOOSE_FILTER_SELECT,
  FILTER_BY_TEXT
} from '../actions/index'

const initialState = {
  events: Array.apply(null, { length: 5 }).map(() => ({
    title: '...',
    date: { day: 0, month: '', year: 0 },
    image: ''
  })),
  isFetching: false
}

const events = (city = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return {
        ...city,
        isFetching: true
      }

    case EVENTS_SUCCESS:
      return {
        ...city,
        events: action.payload.events,
        isFetching: false
      }

    case EVENTS_FAILED:
      return {
        ...city,
        isFetching: false
      }

    case CHOOSE_FILTER_SELECT:
      const { field, value } = action.payload
      return {
        ...city,
        events: city.events.map((event) => {
          let shouldShowByMonth = event.shouldShowByMonth === undefined
            ? true
            : event.shouldShowByMonth
          let shouldShowByCity = event.shouldShowByCity === undefined
            ? true
            : event.shouldShowByCity

          if (field === 'months') {
            shouldShowByMonth = !value
              ? true
              : event.date.month === value
          }

          if (field === 'city') {
            shouldShowByCity = !value
              ? true
              : event.location.city === value
          }

          return {
            ...event,
            shouldShowByMonth,
            shouldShowByCity
          }
        })
      }

    case FILTER_BY_TEXT:
      return {
        ...city,
        events: city.events.map((event) => {
          return {
            ...event,
            shouldShowByText: !!event.title
              .match(new RegExp(`${action.payload.value}`, 'i'))
          }
        })
      }
  }
  return city
}

export default events
