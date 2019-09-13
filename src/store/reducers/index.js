import { FECTHING_BREWERY_START, FECTHING_BREWERY_SUCCESS, FECTHING_BREWERY_FAILURE, PAGE_CHANGE } from '../actions'

const initialState = {
  brewery: [],
  url: 'https://api.openbrewerydb.org/breweries',
  isFetching: false,
  error: ''
}

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case FECTHING_BREWERY_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FECTHING_BREWERY_SUCCESS:
      return {
        ...state,
        brewery: action.payload,
        isFetching: false
      }
    case FECTHING_BREWERY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case PAGE_CHANGE:
      return {
        ...state,
        url: `https://api.openbrewerydb.org/breweries?page=${action.payload}`
      }
    default:
      return state;
  }
};