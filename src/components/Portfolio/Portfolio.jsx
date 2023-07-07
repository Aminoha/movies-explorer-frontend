import React from 'react';
import './Portfolio.css';

const Portfolio = (props) => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            className='link portfolio__link'
            href='https://aminoha.github.io/how-to-learn/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__link-title'>Статичный сайт</p>
            <div className='portfolio__link-arrow'></div>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='link portfolio__link'
            href='https://aminoha.github.io/russian-travel/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__link-title'>Адаптивный сайт</p>
            <div className='portfolio__link-arrow'></div>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='link portfolio__link'
            href='http://aminoha.mesto.nomoreparties.sbs/'
            target='_blank'
            rel='noreferrer'
          >
            <p className='portfolio__link-title'>Одностраничное приложение</p>
            <div className='portfolio__link-arrow'></div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
