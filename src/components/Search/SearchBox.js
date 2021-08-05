import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import css from './searchBox.module.css';

function SearchBox() {
  const history = useHistory();
  const handleOnSubmit = () => {
    history.push(`/search`);
  };

  return (
    <Fragment>
      <div className={css.searchBox}>
        <input type='search' className={css.searchStats} autoComplete='off' />
        <button type='button' className={css.searchStatsBtn} onClick={() => handleOnSubmit()}>
          Search
        </button>
      </div>
    </Fragment>
  );
}

export default SearchBox;
