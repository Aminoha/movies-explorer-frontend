import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import usePopupClose from '../../hooks/usePopupClose';
import './Navigation.css';

const Navigation = ({ isLoggedIn, isOpen, togglePopup }) => {
  usePopupClose(isOpen, togglePopup);

  return (
    <>
      {!isLoggedIn ? (
        <nav className='nav-auth'>
          <Link className='link nav-auth__link' to='/signup'>
            Регистрация
          </Link>
          <Link
            className='link nav-auth__link nav-auth__link_active'
            to='/signin'
          >
            Войти
          </Link>
        </nav>
      ) : (
        <>
          <nav className='nav-movies'>
            <NavLink className='link nav-movies__link' to='/movies'>
              Фильмы
            </NavLink>
            <NavLink className='link nav-movies__link' to='/saved-movies'>
              Сохранённые фильмы
            </NavLink>
          </nav>
          <nav className='nav-profile'>
            <Link className='link nav-profile-link' to='/profile'>
              Аккаунт
            </Link>
          </nav>
          <button
            className='button nav-burger-button'
            onClick={togglePopup}
            type='button'
          ></button>
        </>
      )}
      <nav className={`popup ${isOpen ? 'popup_opened' : ''} `}>
        <div className='popup__container'>
          <button
            className='button popup__button-close'
            type='button'
            onClick={togglePopup}
          ></button>
          <NavLink className='link popup__link' to='/'>
            Главная
          </NavLink>
          <NavLink className='link popup__link' to='/movies'>
            Фильмы
          </NavLink>
          <NavLink className='link popup__link' to='/saved-movies'>
            Сохранённые фильмы
          </NavLink>
          <Link className='link nav-profile-link' to='/profile'>
            Аккаунт
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
