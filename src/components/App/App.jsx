import React, { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  const navigate = useNavigate();

  const path = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const togglePopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  const signOut = () => {
    setIsLoggedIn(false);
    navigate('/signin', { replace: true });
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
    setIsLoggedIn(true);
    navigate('/movies', { replace: true });
  };

  const handleRegister = (evt) => {
    evt.preventDefault();
    navigate('/signin', { replace: true });
  };

  const searchFilm = (evt) => {
    evt.preventDefault()
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className='page'>
      {headerPaths.includes(path) && (
        <Header
          isLoggedIn={isLoggedIn}
          togglePopup={togglePopup}
          isOpen={isOpenPopup}
        />
      )}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies onSearch={searchFilm}/>} />
        <Route path='/saved-movies' element={<SavedMovies onSearch={searchFilm}/>} />
        <Route path='/profile' element={<Profile onSignOut={signOut} />} />
        <Route path='/signin' element={<Login onLogin={handleLogin} />} />
        <Route
          path='/signup'
          element={<Register onRegister={handleRegister} />}
        />
        <Route path='*' element={<NotFound onBack={goBack} />} />
      </Routes>
      {footerPaths.includes(path) && <Footer />}
    </div>
  );
}

export default App;
