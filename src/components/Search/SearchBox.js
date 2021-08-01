import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

function SearchBox(props) {
  const history = useHistory();

  const handleOnSubmit = () => {
    history.push(`/search`);
  };

  return (
    <Fragment>
      <div className='search-box'>
        <input type='search' className='search-stats' autoComplete='off' />
        <button type='button' className='search-stats-btn' onClick={() => handleOnSubmit()}>
          Search
        </button>
      </div>
    </Fragment>
  );
}

export default SearchBox;
