import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';

const SearchForm = ({
  searchMovies,
  setSearchForm,
  searchForm,
  onCheckbox,
  shortMovieCheckbox,
}) => {
  const handleSearch = (evt) => {
    evt.preventDefault();
    searchMovies();
  };

  const handleChange = (evt) => {
    setSearchForm(evt.target.value);
  };

  return (
    <section className='search'>
      <form className='search__form' name='search'>
        <input
          id='search-form'
          className='search__input'
          type='search'
          placeholder='Фильм'
          onChange={handleChange}
          value={searchForm}
          name='movie'
          required
        />
        <button className='button search__button' onClick={handleSearch} />
        <FilterCheckbox
          onCheckbox={onCheckbox}
          shortMovieCheckbox={shortMovieCheckbox}
        />
      </form>
    </section>
  );
};

export default SearchForm;
