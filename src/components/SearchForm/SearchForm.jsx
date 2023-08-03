import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';

const SearchForm = ({ onSearch }) => {
  return (
    <section className='search'>
      <form className='search__form' name='search'>
        <input
          id='search-form'
          className='search__input'
          type='search'
          placeholder='Фильм'
          name='movie'
          required
        />
        <button className='button search__button' onClick={onSearch} />
        <FilterCheckbox />
      </form>
    </section>
  );
};

export default SearchForm;
