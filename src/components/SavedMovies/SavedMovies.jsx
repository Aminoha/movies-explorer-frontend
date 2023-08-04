import React, { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

const SavedMovies = ({
  movies,
  setSortedMovies,
  searchMovies,
  setSearchForm,
  searchForm,
  preloader,
  onLike,
  onDelete,
  onCheckbox,
  shortMovieCheckbox,
  checkLike,
  resetSearchSavedMovies,
}) => {
  useEffect(() => {
    return () => {
      resetSearchSavedMovies();
      if (!shortMovieCheckbox) searchMovies();
    };
  }, []);

  return (
    <main className='main'>
      <SearchForm
        searchMovies={searchMovies}
        setSortedMovies={setSortedMovies}
        setSearchForm={setSearchForm}
        searchForm={searchForm}
        onCheckbox={onCheckbox}
        shortMovieCheckbox={shortMovieCheckbox}
      />
      {preloader ? (
          <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          onLike={onLike}
          onDelete={onDelete}
          checkLike={checkLike}
        />
      )}
    </main>
  );
};

export default SavedMovies;
