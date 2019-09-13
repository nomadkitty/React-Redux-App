import { FECTHING_BREWERY_START, FECTHING_BREWERY_SUCCESS, FECTHING_BREWERY_FAILURE } from '../actions'

const initialState = {
  brewery: [],
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
    default:
      return state;
  }
};