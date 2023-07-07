import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/iam.jpg';

const AboutMe = (props) => {
  return (
    <section className='about-me' id='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__info-block'>
        <div className='about-me__info'>
          <h3 className='about_me__name'>Амин</h3>
          <p className='aboute-me__profession'>
            Фронтенд-разработчик/Системный аналитик, 31 год
          </p>
          <p className='about-me__description'>
            Я&nbsp;работаю системным аналитиком с&nbsp;2018&nbsp;года.
            На&nbsp;данный момент работаю в&nbsp;&laquo;ПАО Сбербанк&raquo;.
            Дополнитеьно изучаю фротенд-разработку на&nbsp;курсе
            Яндекс.Практикум. В&nbsp;свободное время предпочитаю лежать.
            Горизонтальное положение мне нравится более, чем вертикальное.
            И&nbsp;еще мне нравится путешествовать.
          </p>
          <a
            className='link about-me__link'
            href='https://github.com/Aminoha'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <img className='about-me__img' src={myPhoto} alt='Моя фотограия' />
      </div>
    </section>
  );
};

export default AboutMe;
