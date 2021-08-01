import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../Search/SearchBox';

function Header(props) {
  return (
    <Fragment>
      <header id='header'>
        <div className='logo'>
          <Link className='logo-link' to='/'>
            COVID Stats
          </Link>
        </div>

        <SearchBox />

        <div className='navigation'>
          <ul className='menu'>
            <li>
              <Link className='menu-link' to='/'>
                Link 1
              </Link>
            </li>
            <li>
              <Link className='menu-link' to='/'>
                Link 2
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
