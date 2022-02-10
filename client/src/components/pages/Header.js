import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="secondary-bg mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1 className='header-links'>Wanderosa</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/schedule">Schedule</Link>
              <Link to="/view">View</Link>
              <a className='header-links' href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link className='header-links' to="/login">Login</Link>
              <Link className='header-links' to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;