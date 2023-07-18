import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

const AuthForm = ({
  title,
  buttonText,
  linkQuestion,
  linkText,
  link,
  onAurhorization,
  children,
}) => {
  return (
    <main className='authorization'>
      <div className='authorization__container'>
        <form className='authorization__form'>
          <Link className='link authorization__logo' to='/' />
          <h1 className='authorization__title'>{title}</h1>
          <fieldset className='authorization__fieldset'>{children}</fieldset>
          <span className='authorization__span-error'>
            Что-то пошло не так...
          </span>
          <div className='authorization__buttons'>
            <button
              className='button authorization__button'
              onClick={onAurhorization}
            >
              {buttonText}
            </button>
            <p className='authorization__link-text'>
              {linkQuestion}
              <Link className='link authorization__link' to={link}>
                {linkText}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AuthForm;
