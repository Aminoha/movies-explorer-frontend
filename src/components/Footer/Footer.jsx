import React from 'react';
import './Footer.css';

const Footer = (props) => {
  return (
    <section className='footer'>
      <p className='footer__author'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <p className='footer__copy'>&copy; {(new Date().getFullYear())}</p>
        <ul className='footer__socials'>
          <li className='footer-social'>
            <a
              className='link footer__links'
              href='https://practicum.yandex.ru'
              target='_blank'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer-social'>
            <a
              className='link link footer__links'
              href='https://github.com/Aminoha'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
