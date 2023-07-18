import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';

const SavedMovies = ({ onSearch }) => {
  return (
    <main className='main'>
      <SearchForm onSearch={onSearch} />
      <MoviesCardList />
    </main>
  );
};

export default SavedMovies;
