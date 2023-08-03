import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

const Movies = ({
  movies,
  setSortedMovies,
  searchMovies,
  setSearchForm,
  searchForm,
  preloader,
  errorText,
  setErrorText,
  onLike,
  onDelete,
  onCheckbox,
  shortMovieCheckbox,
  checkLike,
}) => {
  return (
    <main className='films'>
      <SearchForm
        searchMovies={searchMovies}
        setSortedMovies={setSortedMovies}
        setSearchForm={setSearchForm}
        searchForm={searchForm}
        setErrorText={setErrorText}
        onCheckbox={onCheckbox}
        shortMovieCheckbox={shortMovieCheckbox}
      />

      {preloader ? (
        <>
          <Preloader />
        </>
      ) : (
        <MoviesCardList
          movies={movies}
          errorText={errorText}
          onLike={onLike}
          onDelete={onDelete}
          checkLike={checkLike}
        />
      )}
    </main>
  );
};

export default Movies;
