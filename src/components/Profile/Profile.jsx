import React, { useState, useContext, useEffect } from 'react';
import useInput from '../../hooks/useForm';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { updateUser } from '../../utils/MainApi';
import { RES_ERRORS } from '../../utils/constants';
import './Profile.css';

const Profile = ({ onSignOut, setCurrentUser }) => {
  const currentUser = useContext(CurrentUserContext);

  const [isEditMode, setIsEditMode] = useState(true);
  const [requestError, setRequestError] = useState('');

  const name = useInput(currentUser.name, {
    isEmpty: false,
    minLength: 2,
    maxLength: 30,
    isName: false,
  });
  const email = useInput(currentUser.email, { isEmpty: true, isEmail: false });

  const handleSumbit = (evt) => {
    evt.preventDefault();
    setRequestError('');
    updateUser(email.value, name.value)
      .then((res) => {
        setCurrentUser(res);
        setIsEditMode(true);
        setRequestError(RES_ERRORS.UPDATE_SUCCESS);
        setTimeout(() => setRequestError(''), 2500);
      })
      .catch((err) => {
        if (err === 500) {
          setRequestError(RES_ERRORS.SERVER_500);
        }
        if (err === 409) {
          setRequestError(RES_ERRORS.UPDATE_PROFILE);
        } else {
          setRequestError(RES_ERRORS.UPDATE_DEFAULT_400);
        }
      });
  };

  const handleEdit = () => {
    setRequestError('');
    setIsEditMode(false);
  };

  useEffect(() => {
    name.setValue(currentUser.name);
    email.setValue(currentUser.email);
  }, [currentUser]);

  return (
    <main className='profile'>
      <h2 className='profile__name'>Привет, {currentUser.name}! </h2>
      <form className='profile__form' onSubmit={handleSumbit}>
        <label className='profile__label'>
          <span className='profile__span'>Имя</span>
          <input
            className='profile__input'
            type='text'
            name='name'
            placeholder='Имя'
            value={name.value}
            onChange={(e) => name.onChange(e)}
            onFocus={(e) => name.onFocus(e)}
            disabled={isEditMode}
            noValidate
          />
          {!name.inputValid && name.isDirty && (
            <span className='profile__input-error'>{name.error}</span>
          )}
        </label>
        <label className='profile__label'>
          <span className='profile__span'>E-mail</span>
          <input
            className='profile__input'
            type='email'
            name='email'
            placeholder='E-mail'
            value={email.value}
            onChange={(e) => email.onChange(e)}
            onFocus={(e) => email.onFocus(e)}
            disabled={isEditMode}
            noValidate
          />
          {!email.inputValid && email.isDirty && (
            <span className='profile__input-error'>{email.error}</span>
          )}
        </label>
        {!isEditMode && (
          <div className='profile__buttons'>
            <span className='profile__error-span'>{requestError}</span>
            <button
              className='button profile__button profile__button_type_save'
              disabled={
                !email.inputValid ||
                !name.inputValid ||
                (name.value === currentUser.name &&
                  email.value === currentUser.email)
              }
            >
              Сохранить
            </button>
          </div>
        )}
      </form>
      {isEditMode && (
        <div className='profile__buttons'>
          <span className='profile__error-span_positive'>{requestError}</span>
          <button
            type='button'
            className='button profile__button profile__button_type_change'
            onClick={handleEdit}
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
