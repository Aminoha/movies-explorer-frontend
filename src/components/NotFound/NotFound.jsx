import React from 'react';

import './NotFound.css';

const NotFound = ({ onBack }) => {
  return (
    <main className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <button className='link not-found__link' type='button' onClick={onBack}>
        Назад
      </button>
    </main>
  );
};

export default NotFound;
