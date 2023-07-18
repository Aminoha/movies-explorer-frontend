import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

const NavTab = (props) => {
  return (
    <nav className='nav-info'>
      <ul className='nav-info__list'>
        <li className='nav-info__item'>
          <Link
            className='link nav-info__link'
            reloadDocument
            to='#about-project'
          >
            О проекте
          </Link>
        </li>
        <li className='nav-info__item'>
          <Link className='link nav-info__link' reloadDocument to='#techs'>
            Технологии
          </Link>
        </li>
        <li className='nav-info__item'>
          <Link className='link nav-info__link' reloadDocument to='#about-me'>
            Студент
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
