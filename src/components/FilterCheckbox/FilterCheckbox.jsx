import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({onCheckbox, shortMovieCheckbox}) => {

  return (
    <label className='checkbox-label'>
      <input className='checkbox' type='checkbox' name="short-films" onChange={onCheckbox} checked={shortMovieCheckbox}/>
      <span className='cehckbox-span'>Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
