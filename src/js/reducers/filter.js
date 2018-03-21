'use strict'

import {
  FILL_FILTER_SELECTS,
  CHOOSE_FILTER_SELECT,
  FILTER_BY_TEXT
} from '../actions/index'

const initialState = {
  months: {
    icon: { id: 'date', label: 'Data' },
    label: 'Escolha um mês',
    selected: '',
    options: [{
      text: 'Escolha um mês', value: ''
    }]
  },

  city: {
    icon: { id: 'location', label: 'Locais' },
    label: 'Escolha uma cidade',
    selected: '',
    options: [{
      text: 'Escolha uma cidade', value: ''
    }]
  },

  searchField: ''
}

const filter = (city = initialState, action) => {
  switch (action.type) {
    case FILL_FILTER_SELECTS:
      return {
        ...city,
        [action.payload.select]: {
          ...city[action.payload.select],
          options: [
            ...city[action.payload.select].options,
            ...action.payload.options
          ]
        }
      }

    case CHOOSE_FILTER_SELECT:
      return {
        ...city,
        [action.payload.field]: {
          ...city[action.payload.field],
          selected: action.payload.value
        }
      }

    case FILTER_BY_TEXT:
      return {
        ...city,
        searchField: action.payload.value
      }
  }
  return city
}

export default filter
