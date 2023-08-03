import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import useInput from '../../hooks/useForm';
import { authorize } from '../../utils/MainApi';
import { RES_ERRORS } from '../../utils/constants';

const Login = ({ onLogin, isLoggedIn }) => {
  const navigate = useNavigate();

  isLoggedIn && navigate('/', { replace: true });

  const [requestError, setRequestError] = useState('');

  const email = useInput('', { isEmpty: true, isEmail: false });
  const password = useInput('', { isEmpty: true, minLength: 6 });

  const handleLogin = (evt) => {
    evt.preventDefault();
    setRequestError('');
    authorize(email.value, password.value)
      .then((res) => {
        navigate('/movies', { replace: true });
        onLogin(res);
      })
      .catch((err) => {
        if (err === 500) {
          setRequestError(RES_ERRORS.SERVER_500);
        }
        if (err === 401) {
          setRequestError(RES_ERRORS.SIGNIN_401);
        } else {
          setRequestError(RES_ERRORS.SIGNIN_DEFAULT);
        }
      });
  };

  return (
    <AuthForm
      title='Рады видеть!'
      buttonText='Войти'
      linkQuestion='Ещё не зарегистрированы?'
      linkText='Регистрация'
      link='/signup'
      requestError={requestError}
      handleSubmit={handleLogin}
      disabledButton={!email.inputValid || !password.inputValid}
    >
      <label className='authorization__label'>
        E-mail
        <input
          className='authorization__input'
          type='email'
          name='email'
          placeholder='E-mail'
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onFocus={(e) => email.onFocus(e)}
          noValidate
        />
        {!email.inputValid && email.isDirty && (
          <span className='authorization__input-error'>{email.error}</span>
        )}
      </label>
      <label className='authorization__label'>
        Пароль
        <input
          className='authorization__input'
          type='password'
          name='password'
          placeholder='Пароль'
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onFocus={(e) => password.onFocus(e)}
          noValidate
        />
        {!password.inputValid && password.isDirty && (
          <span className='authorization__input-error'>{password.error}</span>
        )}
      </label>
    </AuthForm>
  );
};

export default Login;
