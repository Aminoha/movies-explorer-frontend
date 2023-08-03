import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = (props) => {
  return (
    <label className='checkbox-label'>
      <input className='checkbox' type='checkbox' name="short-films" />
      <span className='cehckbox-span'>Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
