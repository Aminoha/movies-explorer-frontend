import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ onSearch }) => {
  return (
    <main className='films'>
      <SearchForm onSearch={onSearch} />
      <MoviesCardList />
    </main>
  );
};

export default Movies;
