import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <Fragment>
      <footer id='footer'>
        <div className='footer-logo'>
          <Link className='footer-logo-link' to='/'>
            COVID Stats
          </Link>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
