import React, { useState } from 'react';
import './Profile.css';

const Profile = ({ onSignOut }) => {
  const [isEditMode, setIsEditMode] = useState(true);

  const handleSumbit = (evt) => {
    evt.preventDefault();
    setIsEditMode(!isEditMode);
  };

  return (
    <main className='profile'>
      <h2 className='profile__name'>Привет, Виталий!</h2>
      <form className='profile__form'>
        <label className='profile__label'>
          <span className='profile__span'>Имя</span>
          <input
            className='profile__input'
            type='text'
            name='name'
            placeholder='Имя'
            minLength='2'
            maxLength='40'
            required
            disabled={isEditMode}
          />
        </label>
        <label className='profile__label'>
          <span className='profile__span'>E-mail</span>
          <input
            className='profile__input'
            type='email'
            name='email'
            placeholder='E-mail'
            required
            disabled={isEditMode}
          />
        </label>
        {!isEditMode && (
          <div className='profile__buttons'>
            <span className='profile__error-span'>
              При обновлении профиля произошла ошибка.
            </span>
            <button
              className='button profile__button profile__button_type_save'
              onClick={handleSumbit}
            >
              Сохранить
            </button>
          </div>
        )}
      </form>
      {isEditMode && (
        <div className='profile__buttons'>
          <button
            type='button'
            className='button profile__button profile__button_type_change'
            onClick={handleSumbit}
          >
            Редактировать
          </button>
          <button
            type='button'
            className='button profile__button profile__button_type_logout'
            onClick={onSignOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      )}
    </main>
  );
};

export default Profile;
