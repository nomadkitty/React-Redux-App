import axios from 'axios';

export const FECTHING_BREWERY_START = 'FECTHING_BREWERY_START'
export const FECTHING_BREWERY_SUCCESS = 'FECTHING_BREWERY_SUCCESS'
export const FECTHING_BREWERY_FAILURE = 'FECTHING_BREWERY_FAILURE'

export const getBrewery = () => dispatch => {
  dispatch({ type: FECTHING_BREWERY_START });
  axios
    .get('https://api.openbrewerydb.org/breweries?page=2&per_page=10')
    .then(res => {
      console.log(res);
      dispatch({ type: FECTHING_BREWERY_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FECTHING_BREWERY_FAILURE, payload: err.message })
    })
}