import React from 'react';
import { Link } from 'react-router-dom';
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
