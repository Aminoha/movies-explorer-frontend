import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = ({ isLoggedIn, togglePopup, isOpen }) => {
  return (
    <header className='header'>
      <Link className='link header__logo' to='/' />
      <Navigation
        isLoggedIn={isLoggedIn}
        isOpen={isOpen}
        togglePopup={togglePopup}
      />
    </header>
  );
};

export default Header;
