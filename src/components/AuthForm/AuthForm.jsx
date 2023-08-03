import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';

const AuthForm = ({
  title,
  buttonText,
  linkQuestion,
  linkText,
  link,
  disabledButton,
  requestError,
  handleSubmit,
  children,
}) => {
  return (
    <main className='authorization'>
      <div className='authorization__container'>
        <form className='authorization__form' onSubmit={handleSubmit}>
          <Link className='link authorization__logo' to='/' />
          <h1 className='authorization__title'>{title}</h1>
          <fieldset className='authorization__fieldset'>{children}</fieldset>
          <div className='authorization__buttons'>
          <span className='authorization__span-error'>{requestError}</span>
            <button
              className='button authorization__button'
              disabled={disabledButton}
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
