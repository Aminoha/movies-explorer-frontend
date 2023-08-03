import React, { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ movies, errorText, onLike, onDelete, checkLike }) => {
  const [countCards, setCountCards] = useState(12);
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResizeWindow = () =>
      setTimeout(() => setWidth(window.innerWidth), 1500);
    window.addEventListener('resize', handleResizeWindow);
    if (width > 1027) {
      setCountCards(12);
    } else if (width > 649) {
      setCountCards(8);
    } else setCountCards(5);

    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, [width]);

  const showMore = () => {
    if (width > 1027) {
      setCountCards(countCards + 3);
    } else {
      setCountCards(countCards + 2);
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
