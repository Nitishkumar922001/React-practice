import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../auth-context';

const Navigation = (props) => {

  const cxrt=useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {cxrt.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {cxrt.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {cxrt.isLoggedIn && (
          <li>
            <button onClick={cxrt.logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
