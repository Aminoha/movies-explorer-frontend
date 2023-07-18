import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

const Register = ({ onRegister }) => {
  return (
    <AuthForm
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      linkQuestion='Уже зарегистрированы?'
      linkText='Войти'
      link='/signin'
      onAurhorization={onRegister}
    >
      <label className='authorization__label'>
        Имя
        <input
          className='input authorization__input'
          type='text'
          name='name'
          placeholder='Имя'
          minLength='2'
          maxLength='40'
          required
        />
      </label>
      <label className='authorization__label'>
        E-mail
        <input
          className='authorization__input'
          type='email'
          name='email'
          placeholder='E-mail'
          required
        />
      </label>
      <label className='authorization__label'>
        Пароль
        <input
          className='authorization__input'
          type='password'
          name='password'
          placeholder='Пароль'
          minLength='4'
          required
        />
      </label>
    </AuthForm>
  );
};

export default Register;
