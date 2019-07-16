import React from 'react';
import { useDarkMode } from '../hooks';

const Navbar = props => {
  const { darkMode, setDarkMode } = props;
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className='navbar'>
      <h1>Crypto Tracker</h1>
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
  );
};

export default Navbar;
