import React, { Fragment } from 'react';
import * as css from './search.module.css';

function SearchPage(props) {
  return (
    <Fragment>
      <div className={css.searchPage}>
        <h1>Search results</h1>
        <ul className={css.searchPageList}>
          <li>
            <h3 className={css.searchPageTitle}>
              <a> YouTube-dl has received a DMCA takedown from RIAA</a>
            </h3>
            <time dateTime='2008-02-14 20:00'>14/08/2020</time>
          </li>
          <li>
            <h3 className={css.searchPageTitle}>
              <a> YouTube-dl has received a DMCA takedown from RIAA</a>
            </h3>
            <time dateTime='2008-02-14 20:00'>14/08/2020</time>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default SearchPage;
