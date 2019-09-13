import React, { useEffect }from 'react';
import { connect } from 'react-redux';

import BreweryCard from './breweryCard';
import { getBrewery, pageChange } from '../store/actions';
import ChangePage from './changepage';


const BreweryList =(props) => {
  console.log(props)
  const {  getBrewery, brewery, isFetching, url, pageChange } = props

  useEffect(() => {
    getBrewery(url);
    },[url])

  const handlePageChange = (number) => {
    pageChange(number);
  }

  if (isFetching) {
    return <h2>Breweries are coming!</h2>
  }

  return (
    <>
      <ChangePage handlePageChange={handlePageChange} />
      <div className="cardContainer">
        {brewery.map(item => 
          <BreweryCard 
            key={item.id}
            item={item}
          />
          )}
      </div>
      <ChangePage handlePageChange={handlePageChange} />
    </>
  )
}

const mapStateToProps = state => {
  console.log('initial', state)
  return {
    brewery: state.brewery,
    url: state.url,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect( mapStateToProps, { getBrewery, pageChange } )(BreweryList);