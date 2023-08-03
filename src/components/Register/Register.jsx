import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';
import useInput from '../../hooks/useForm';
import { register, authorize } from '../../utils/MainApi';
import { RES_ERRORS } from '../../utils/constants';

const Register = ({ onLogin, isLoggedIn }) => {
  const navigate = useNavigate();

  isLoggedIn && navigate('/', { replace: true });

  const [requestError, setRequestError] = useState('');

  const name = useInput('', {
    isEmpty: true,
    minLength: 2,
    maxLength: 30,
    isName: false,
  });
  const email = useInput('', { isEmpty: true, isEmail: false });
  const password = useInput('', { isEmpty: true, minLength: 6 });

  const handleRegister = () => {
    setRequestError('');
    return register(name.value, email.value, password.value)
      .then(() => {
        authorize(email.value, password.value).then((res) => {
          navigate('/movies', { replace: true });
          onLogin(res);
        });
      })
      .catch((err) => {
        if (err === 500) {
          setRequestError(RES_ERRORS.SERVER_500);
        }
        if (err === 409) {
          setRequestError(RES_ERRORS.SIGNUP_409);
        } else {
          setRequestError(RES_ERRORS.SIGNUP_DEFAUTLT);
        }
      });
  };

  return (
    <AuthForm
      title='Добро пожаловать!'
      buttonText='Зарегистрироваться'
      linkQuestion='Уже зарегистрированы?'
      linkText='Войти'
      link='/signin'
      requestError={requestError}
      handleSubmit={handleRegister}
      disabledButton={
        !email.inputValid || !name.inputValid || !password.inputValid
      }
    >
      <label className='authorization__label'>
        Имя
        <input
          className='input authorization__input'
          type='text'
          name='name'
          placeholder='Имя'
          value={name.value}
          onChange={(e) => name.onChange(e)}
          onFocus={(e) => name.onFocus(e)}
          noValidate
        />
        {!name.inputValid && name.isDirty && (
          <span className='authorization__input-error'>{name.error}</span>
        )}
      </label>
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

export default Register;
