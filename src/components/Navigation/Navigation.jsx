import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ isLoggedIn }) => {
  return (
    <nav className='nav-auth'>
      <ul className='nav-auth__list'>
        {!isLoggedIn ? (
          <>
            <li className='nav-auth__item'>
              <Link className='link nav-auth__link' to='/signup'>
                Регистрация
              </Link>
            </li>
            <li className='nav-auth__item'>
              <Link
                className='link nav-auth__link nav-auth__link_active'
                to='/signin'
              >
                Войти
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className='nav-auth__item'>
              <NavLink className='link nav-auth__link' to='/movies'>
                Фильмы
              </NavLink>
            </li>
            <li className='nav-auth__item'>
              <NavLink className='link nav-auth__link' to='/saved-movies'>
                Сохранённые фильмы
              </NavLink>
            </li>
            <li className='nav-auth__item'>
              <Link className='link nav-auth__link' to='/profile'>
                <i className='nav-auth__account-icon'>dfgd</i>
                <p className='nav-auth__account'>Аккаунт</p>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
