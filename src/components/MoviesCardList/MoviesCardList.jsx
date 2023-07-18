import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = (props) => {
  return (
    <section className='movies'>
      <ul className='movies__list'>
        <MoviesCard />
      </ul>
      <button className='button movies__more' type='button'>
        Еще
      </button>
    </section>
  );
};

export default MoviesCardList;
