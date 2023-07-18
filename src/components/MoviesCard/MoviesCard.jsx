import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import PosterOne from '../../images/movie-poster1.png';
import PosterTwo from '../../images/movie-poster2.png';
import PosterThree from '../../images/movie-poster3.png';

const MoviesCard = (props) => {
  const path = useLocation().pathname;

  return (
    <>
      <li className='movies__item'>
        {/* удалить из файлов картинки после реализации функционала */}
        <a
          className='link movies__trailer'
          href='https://www.youtube.com/watch?v=4Kvd-uquuhI'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={PosterOne}
            alt={`Кадр из фильма ${'33 слова о дизайне'}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>33 слова о дизайне</h2>
          {path === '/movies' ? (
            <button
              className='button movies__like movies__like_active'
              name='like'
              type='button'
            ></button>
          ) : (
            <button
              className='button movies__delete'
              name='like'
              type='button'
            ></button>
          )}
        </div>
        <p className='movies__duration'>1ч 47м</p>
      </li>
      <li className='movies__item'>
        {/* удалить из файлов картинки после реализации функционала */}
        <a
          className='link movies__trailer'
          href='https://www.youtube.com/watch?v=4Kvd-uquuhI'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={PosterTwo}
            alt={`Кадр из фильма ${'Киноальманах «100 лет дизайна»'}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>Киноальманах «100 лет дизайна»</h2>
          {path === '/movies' ? (
            <button className='button movies__like' name='like'></button>
          ) : (
            <button className='button movies__delete' name='like'></button>
          )}
        </div>
        <p className='movies__duration'>1ч 3м</p>
      </li>
      <li className='movies__item'>
        {/* удалить из файлов картинки после реализации функционала */}
        <a
          className='link movies__trailer'
          href='https://www.youtube.com/watch?v=4Kvd-uquuhI'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={PosterThree}
            alt={`Кадр из фильма ${'В погоне за Бенкси'}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>В погоне за Бенкси</h2>
          {path === '/movies' ? (
            <button className='button movies__like' name='like'></button>
          ) : (
            <button className='button movies__delete' name='like'></button>
          )}
        </div>
        <p className='movies__duration'>1ч 42м</p>
      </li>
      <li className='movies__item'>
        {/* удалить из файлов картинки после реализации функционала */}
        <a
          className='link movies__trailer'
          href='https://www.youtube.com/watch?v=4Kvd-uquuhI'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={PosterThree}
            alt={`Кадр из фильма ${'Баския: Взрыв реальности'}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>Баския: Взрыв реальности</h2>
          {path === '/movies' ? (
            <button className='button movies__like ' name='like'></button>
          ) : (
            <button className='button movies__delete' name='like'></button>
          )}
        </div>
        <p className='movies__duration'>1ч 21м</p>
      </li>
      <li className='movies__item'>
        {/* удалить из файлов картинки после реализации функционала */}
        <a
          className='link movies__trailer'
          href='https://www.youtube.com/watch?v=4Kvd-uquuhI'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={PosterThree}
            alt={`Кадр из фильма ${'Бег это свобода'}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>Бег это свобода</h2>
          {path === '/movies' ? (
            <button className='button movies__like ' name='like'></button>
          ) : (
            <button className='button movies__delete' name='like'></button>
          )}
        </div>
        <p className='movies__duration'>1ч 44м</p>
      </li>
      <li className='movies__item'>
        {/* удалить из файлов картинки после реализации функционала */}
        <a
          className='link movies__trailer'
          href='https://www.youtube.com/watch?v=4Kvd-uquuhI'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={PosterThree}
            alt={`Кадр из фильма ${'Книготорговцы'}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>Книготорговцы</h2>
          {path === '/movies' ? (
            <button className='button movies__like' name='like'></button>
          ) : (
            <button className='button movies__delete' name='like'></button>
          )}
        </div>
        <p className='movies__duration'>1ч 37м</p>
      </li>
      <li className='movies__item'>
        {/* удалить из файлов картинки после реализации функционала */}
        <a
          className='link movies__trailer'
          href='https://www.youtube.com/watch?v=4Kvd-uquuhI'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={PosterThree}
            alt={`Кадр из фильма ${'Когда я думаю о Германии ночью'}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>Когда я думаю о Германии ночью</h2>
          {path === '/movies' ? (
            <button
              className='button movies__like movies__like_active'
              name='like'
            ></button>
          ) : (
            <button className='button movies__delete' name='like'></button>
          )}
        </div>
        <p className='movies__duration'>1ч 56м</p>
      </li>
      <li className='movies__item'>
        {/* удалить из файлов картинки после реализации функционала */}
        <a
          className='link movies__trailer'
          href='https://www.youtube.com/watch?v=4Kvd-uquuhI'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={PosterThree}
            alt={`Кадр из фильма ${'Gimme Danger: История Игги и The Stooge...'}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>
            Gimme Danger: История Игги и The Stooge...
          </h2>
          {path === '/movies' ? (
            <button
              className='button movies__like movies__like_active'
              name='like'
            ></button>
          ) : (
            <button className='button movies__delete' name='like'></button>
          )}
        </div>
        <p className='movies__duration'>1ч 59м</p>
      </li>
      <li className='movies__item'>
        {/* удалить из файлов картинки после реализации функционала */}
        <a
          className='link movies__trailer'
          href='https://www.youtube.com/watch?v=4Kvd-uquuhI'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={PosterThree}
            alt={`Кадр из фильма ${'Дженис: Маленькая девочка грустит'}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>Дженис: Маленькая девочка грустит</h2>
          {path === '/movies' ? (
            <button
              className='button movies__like movies__like_active'
              name='like'
            ></button>
          ) : (
            <button className='button movies__delete' name='like'></button>
          )}
        </div>
        <p className='movies__duration'>1ч 42м</p>
      </li>
      <li className='movies__item'>
        {/* удалить из файлов картинки после реализации функционала */}
        <a
          className='link movies__trailer'
          href='https://www.youtube.com/watch?v=4Kvd-uquuhI'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={PosterThree}
            alt={`Кадр из фильма ${'Соберись перед прыжком'}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>Соберись перед прыжком</h2>
          {path === '/movies' ? (
            <button
              className='button movies__like movies__like_active'
              name='like'
            ></button>
          ) : (
            <button className='button movies__delete' name='like'></button>
          )}
        </div>
        <p className='movies__duration'>1ч 10м</p>
      </li>
      <li className='movies__item'>
        {/* удалить из файлов картинки после реализации функционала */}
        <a
          className='link movies__trailer'
          href='https://www.youtube.com/watch?v=4Kvd-uquuhI'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={PosterThree}
            alt={`Кадр из фильма ${'Пи Джей Харви: A dog called money'}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>Пи Джей Харви: A dog called money</h2>
          {path === '/movies' ? (
            <button
              className='button movies__like movies__like_active'
              name='like'
            ></button>
          ) : (
            <button className='button movies__delete' name='like'></button>
          )}
        </div>
        <p className='movies__duration'>1ч 4м</p>
      </li>
      <li className='movies__item'>
        {/* удалить из файлов картинки после реализации функционала */}
        <a
          className='link movies__trailer'
          href='https://www.youtube.com/watch?v=4Kvd-uquuhI'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={PosterThree}
            alt={`Кадр из фильма ${'По волнам: Искусство звука в кино'}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>По волнам: Искусство звука в кино</h2>
          {path === '/movies' ? (
            <button
              className='button movies__like movies__like_active'
              name='like'
            ></button>
          ) : (
            <button className='button movies__delete' name='like'></button>
          )}
        </div>
        <p className='movies__duration'>1ч 7м</p>
      </li>
    </>
  );
};

export default MoviesCard;
