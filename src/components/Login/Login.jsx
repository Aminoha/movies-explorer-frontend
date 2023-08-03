import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

const Login = ({ onLogin }) => {
  return (
    <AuthForm
      title='Рады видеть!'
      buttonText='Войти'
      linkQuestion='Ещё не зарегистрированы?'
      linkText='Регистрация'
      link='/signup'
      onAurhorization={onLogin}
    >
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

export default Login;
