import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = props => {
  const { darkMode, setDarkMode } = props;
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <div className='coin-links'>
          <Link exact to='/'>
            <h1 className='site-title'>Crypto Tracker</h1>
          </Link>
          <NavLink className='coin-link' to='/bitcoin'>
            Bitcoin
          </NavLink>
          <NavLink className='coin-link' to='/ethereum'>
            Ethereum
          </NavLink>
          <NavLink className='coin-link' to='/altcoins'>
            Other
          </NavLink>
        </div>
        <div className='dark-mode-toggler'>
          <div className='dark-mode-icon-container'>
            <div id='dark-mode-icon' className={darkMode ? 'hide' : ''} />
            <div id='light-mode-icon' className={!darkMode ? 'hide' : ''} />
          </div>
          <div onClick={toggleMode} className='dark-mode__toggle'>
            <div className={darkMode ? 'toggle toggled' : 'toggle'} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
