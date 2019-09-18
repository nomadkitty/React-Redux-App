import axios from 'axios';

export const FECTHING_BREWERY_START = 'FECTHING_BREWERY_START';
export const FECTHING_BREWERY_SUCCESS = 'FECTHING_BREWERY_SUCCESS';
export const FECTHING_BREWERY_FAILURE = 'FECTHING_BREWERY_FAILURE';
export const PAGE_CHANGE = 'PAGE_CHANGE';

export const getBrewery = (url) => dispatch => {
  dispatch({ type: FECTHING_BREWERY_START });
  axios
    .get(url)
    .then(res => {
      console.log(res);
      dispatch({ type: FECTHING_BREWERY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FECTHING_BREWERY_FAILURE, payload: err.message })
    })
}

export const pageChange = (number) => {
  return {
    type: PAGE_CHANGE,
    payload: number
  }
}