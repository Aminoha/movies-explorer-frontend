import React, { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

import './MoviesCardList.css';
import { ADD_CARD, COUNT_CARD, WIDTH_SIZE } from '../../utils/constants';

const MoviesCardList = ({ movies, errorText, onLike, onDelete, checkLike }) => {
  const [countCards, setCountCards] = useState(12);
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResizeWindow = () =>
      setTimeout(() => setWidth(window.innerWidth), 1500);
    window.addEventListener('resize', handleResizeWindow);
    if (width > WIDTH_SIZE.BIG) {
      setCountCards(COUNT_CARD.MAX);
    } else if (width > WIDTH_SIZE.MEDIUM) {
      setCountCards(COUNT_CARD.MEDIUM);
    } else setCountCards(COUNT_CARD.SMALL);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, [width]);

  const showMore = () => {
    if (width > WIDTH_SIZE.BIG) {
      setCountCards(countCards + ADD_CARD.MAX);
    } else {
      setCountCards(countCards + ADD_CARD.MIN);
    }
  };

  return (
    <section className='movies'>
      <span className='movies__error'>{errorText}</span>
      <ul className='movies__list'>
        {movies.slice(0, countCards).map((movie) => (
          <MoviesCard
            key={movie.movieId}
            movie={movie}
            onLike={onLike}
            onDelete={onDelete}
            checkLike={checkLike}
          />
        ))}
      </ul>
      {!(movies.length <= countCards) && (
        <button
          className='button movies__more'
          onClick={showMore}
          type='button'
        >
          Еще
        </button>
      )}
    </section>
  );
};

export default MoviesCardList;
