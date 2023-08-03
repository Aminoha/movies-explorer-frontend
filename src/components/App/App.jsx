import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../../hooks/ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import { getMovieList } from '../../utils/MoviesApi';
import {
  getUser,
  setToken,
  addMovie,
  deleteMovie,
  getFilms,
} from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { RES_ERRORS, ERRORS, shortDuration } from '../../utils/constants';
import { BASE_URL } from '../../utils/MoviesApi';
import './App.css';

function App() {
  const navigate = useNavigate();

  const path = useLocation().pathname;
  const headerPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPaths = ['/', '/movies', '/saved-movies'];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });

  const [searchForm, setSearchForm] = useState('');
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [shortMovieCheckbox, setShortMovieCheckbox] = useState(false);

  const [searchSavedForm, setSearchSavedForm] = useState('');
  const [shortSavedMovieCheckbox, setShortSavedMovieCheckbox] = useState(false);

  const [sortedSavedMovies, setSortedSavedMovies] = useState([]);

  const [savedMovies, setSavedMovies] = useState([]);

  const [errorText, setErrorText] = useState('');

  const [preloader, setPreloader] = useState(false);

  const onLogin = ({ token }) => {
    localStorage.setItem('token', token);
    setToken(token);
    setIsLoggedIn(true);
  };

  const signOut = () => {
    setToken(null);
    setIsLoggedIn(false);
    setCurrentUser({});
    setMovies([]);
    setSortedMovies([]);
    setSearchForm('');
    setShortMovieCheckbox(false);
    setSearchSavedForm('');
    setShortSavedMovieCheckbox(false);
    setSortedSavedMovies([]);
    setSavedMovies([]);
    setErrorText('');
    localStorage.clear();
  };

  const tokenCheck = () => {
    const token = localStorage.getItem('token');
    if (!token) return setIsLoading(false);
    setToken(token);
    getUser(token)
      .then(() => setIsLoggedIn(true))
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([getFilms(), getUser()])
        .then(([savedMovies, user]) => {
          setSavedMovies(savedMovies);
          setCurrentUser(user);
          setMovies(JSON.parse(localStorage.getItem('allMovies')) ?? movies);
          setSortedMovies(
            JSON.parse(localStorage.getItem('movies')) ?? sortedMovies
          );
          setSearchForm(localStorage.getItem('search-input') ?? searchForm);
          setShortMovieCheckbox(localStorage.getItem('checkbox') === 'true');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    tokenCheck();
  }, []);

  const getMovies = () => {
    getMovieList()
      .then((movies) => {
        const newMovies = movies.map((movie) => ({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: BASE_URL + movie.image.url,
          trailerLink: movie.trailerLink,
          thumbnail: BASE_URL + movie.image.formats.thumbnail.url,
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        }));
        setMovies(newMovies);
        saveMovies(newMovies);
        localStorage.setItem('allMovies', JSON.stringify(newMovies));
      })
      .catch((err) => {
        setErrorText(RES_ERRORS.SEARCH_ERROR);
        console.log(err);
      })
      .finally(() => {
        setPreloader(false);
      });
  };

  const searchMovies = () => {
    if (!searchForm) {
      setErrorText(ERRORS.NEED_LETTERS);
      setSortedMovies([]);
      return;
    }
    setPreloader(true);
    if (movies.length > 0) {
      saveMovies(movies);
      setPreloader(false);
    } else {
      getMovies();
    }
  };

  const saveMovies = (movies) => {
    const newSortedMovies = sortMovies(movies, searchForm, shortMovieCheckbox);
    localStorage.setItem('movies', JSON.stringify(newSortedMovies));
    localStorage.setItem('search-input', searchForm);
    localStorage.setItem('checkbox', shortMovieCheckbox);
    setSortedMovies(newSortedMovies);
  };

  useEffect(() => {
    if (sortedMovies.length === 0) {
      setErrorText(ERRORS.NOT_FOUND);
    } else {
      setErrorText('');
    }
  }, [sortedMovies]);

  const searchSavedMovies = () => {
    const sortedMovies = sortMovies(
      savedMovies,
      searchSavedForm,
      shortSavedMovieCheckbox
    );
    setSortedSavedMovies(sortedMovies);
  };

  useEffect(searchSavedMovies, [shortSavedMovieCheckbox, savedMovies]);

  const sortMovies = (movies, searchForm, checkbox) => {
    return movies.filter((movie) =>
      checkbox
        ? movie.duration <= shortDuration &&
          (movie.nameRU.toLowerCase().includes(searchForm.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchForm.toLowerCase()))
        : movie.nameRU.toLowerCase().includes(searchForm.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchForm.toLowerCase())
    );
  };

  const onLike = (movie) => {
    addMovie(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkLike = (movie) =>
    savedMovies.some((item) => item.movieId === movie.movieId);

  const onDelete = (movie) => {
    const id = movie._id
      ? movie._id
      : savedMovies.find((item) => item.movieId === movie.movieId)._id;
    deleteMovie(id)
      .then(() => {
        setSavedMovies((movies) => movies.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const togglePopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  const goBack = () => {
    navigate(-1);
  };

  useEffect(searchMovies, [shortMovieCheckbox, savedMovies]);

  if (isLoading) return <Preloader />;

  return (
    <CurrentUserContext.Provider
      value={currentUser}
      setCurrentUser={setCurrentUser}
    >
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
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                isLoggedIn={isLoggedIn}
                movies={sortedMovies}
                setSortedMovies={setSortedMovies}
                searchMovies={searchMovies}
                setSearchForm={setSearchForm}
                searchForm={searchForm}
                preloader={preloader}
                errorText={errorText}
                setErrorText={setErrorText}
                onLike={onLike}
                onDelete={onDelete}
                onCheckbox={() => setShortMovieCheckbox(!shortMovieCheckbox)}
                shortMovieCheckbox={shortMovieCheckbox}
                checkLike={checkLike}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                movies={sortedSavedMovies}
                isLoggedIn={isLoggedIn}
                setSortedMovies={setSortedMovies}
                searchMovies={searchSavedMovies}
                setSearchForm={setSearchSavedForm}
                searchForm={searchSavedForm}
                preloader={preloader}
                errorText={errorText}
                onDelete={onDelete}
                onCheckbox={() =>
                  setShortSavedMovieCheckbox(!shortSavedMovieCheckbox)
                }
                shortMovieCheckbox={shortSavedMovieCheckbox}
                checkLike={checkLike}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                isLoggedIn={isLoggedIn}
                onSignOut={signOut}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route
            path='/signin'
            element={<Login onLogin={onLogin} isLoggedIn={isLoggedIn} />}
          />
          <Route
            path='/signup'
            element={<Register onLogin={onLogin} isLoggedIn={isLoggedIn} />}
          />
          <Route path='*' element={<NotFound onBack={goBack} />} />
        </Routes>
        {footerPaths.includes(path) && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
