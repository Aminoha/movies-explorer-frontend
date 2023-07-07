import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavTab.css';

const NavTab = (props) => {
  return (
    <nav className='nav-info'>
      <ul className='nav-info__list'>
        <li className='nav-info__item'>
          <Link className='link nav-info__link' smooth to='#about-project'>О проекте</Link>
        </li>
        <li className='nav-info__item'>
          <Link className='link nav-info__link' smooth to='#techs'>
            Технологии
          </Link>
        </li>
        <li className='nav-info__item'>
          <Link className='link nav-info__link' smooth to='#about-me'>Студент</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavTab;
