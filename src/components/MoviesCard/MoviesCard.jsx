import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

const MoviesCard = ({ movie, onLike, onDelete, checkLike }) => {
  const path = useLocation().pathname;

  const isSaved = checkLike(movie);
  const duration = `${Math.floor(movie.duration / 60)}ч ${
    movie.duration % 60
  }м`;

  const handleLike = () => (!isSaved ? onLike(movie) : onDelete(movie));

  return (
    <>
      <li className='movies__item'>
        <a
          className='link movies__trailer'
          href={movie.trailerLink}
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='movies__poster'
            src={movie.image}
            alt={`Кадр из фильма ${movie.nameRU}`}
          />
        </a>
        <div className='movies__group'>
          <h2 className='movies__name'>{movie.nameRU}</h2>
          {path === '/movies' ? (
            <button
              className={`button movies__like ${
                isSaved ? 'movies__like_active' : ''
              }`}
              name='like'
              type='button'
              onClick={handleLike}
            ></button>
          ) : (
            <button
              className='button movies__delete'
              name='delete'
              type='button'
              onClick={handleLike}
            ></button>
          )}
        </div>
        <p className='movies__duration'>{duration}</p>
      </li>
    </>
  );
};

export default MoviesCard;
