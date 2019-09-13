import React, { useEffect }from 'react';
import { connect } from 'react-redux';

import BreweryCard from './breweryCard'

import { getBrewery } from '../store/actions'

const BreweryList =(props) => {
  console.log(props)
  const {  getBrewery, brewery, isFetching, error } = props

  useEffect(() => {
    getBrewery();
    },[getBrewery])

  if (isFetching) {
    return <h2>Breweries are coming!</h2>
  }

  return (
    <>
      <button onClick={getBrewery}>More Breweries</button>
      <div className="cardContainer">
        {brewery.map(item => 
          <BreweryCard 
            key={item.id}
            item={item}
          />
          )}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  console.log('initial', state)
  return {
    brewery: state.brewery,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect( mapStateToProps, { getBrewery } )(BreweryList);