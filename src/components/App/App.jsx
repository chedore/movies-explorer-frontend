import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Landing from "../Landing/Landing";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentLoggedInContext } from "../../contexts/CurrentLoggedContext";
import AppContext from "../../contexts/AppContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { api } from "../../utils/MainApi";
import { EDIT_PROFILE_SUCCESS, EDIT_PROFILE_ERROR } from "../../utils/constants";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) ?? false;
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
    const [savedMovies, setSavedMovies] = useState([]);
  const jwt = localStorage.getItem("jwt");
  const [successRequestMessage, setSuccessRequestMessage] = useState('');
  const [errorRequestMessage, setErrorRequestMessage] = useState('');
  

  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!loggedIn) {navigate("/", { replace: true });}

  
    if (jwt && loggedIn) {
      checkTocken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  useEffect(() => {
    if (jwt && loggedIn) {
      getSavedMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  function checkTocken() {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      api
        .authentication()
        .then((user) => {
          setLoggedIn(true);
          setCurrentUser(user);
          navigate(`${pathname}${search}`, { replace: true });
        })
        .catch((err) => {
          setLoggedIn(false);
          setCurrentUser({});
          alert(err);
        });
    }
  }
  // функция для задержки изменения текста кнопки
  function postponeLoading() {
      const timeout = window.setTimeout(() => {
        setIsLoading(false);
        window.clearTimeout(timeout);
      }, 400);
  }

  function handleLogin(email, password) {
    // setIsLoading(true);
    api
      .login({ email, password })
      .then((res) => {
        if (res.token) localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        postponeLoading();
      });
  }

  function handleRegister(name, email, password) {
    // setIsLoading(true);
    api
      .register({ name, email, password })
      .then((res) => {
        handleLogin(email, password);
      })
      .catch((err) => {
        alert(err);
      })
      .finally(() => {
        postponeLoading();
      });
  }

  function handleLogout() {
    setCurrentUser({});
    setSavedMovies([]);
    setLoggedIn(false);

    localStorage.clear();
    
  }

    // очистка сообщений об ошибках от сервера
    function resetErrorRequestMessage() {
      setErrorRequestMessage('');
    }
    function resetSuccessRequestMessage() {
      setSuccessRequestMessage('');
    }

  function handleUserUpdate(name, email) {
    // setIsLoading(true);
    api
      .userProfile({ name, email })
      .then((user) => {
        setCurrentUser(user);
        setSuccessRequestMessage(EDIT_PROFILE_SUCCESS);
      })
      .catch((err) => {
        setErrorRequestMessage(EDIT_PROFILE_ERROR);
      })
      .finally(() => {
        postponeLoading();
      });
  }

  // получаем сохранённые фильмы
  function getSavedMovies() {
    api
      .getMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        alert(err);
      });
  }

  // сохранить фильм
  function handleSavedMoviesCreate(movie) {
    api
      .createMovie({ movie })
      .then((newFilm) => {
        setSavedMovies([newFilm, ...savedMovies]);
      })
      .catch((error) => alert(error));
  }

  function handleSavedMoviesDelete(movie) {
    const film = savedMovies.find(({ movieId }) => movieId === movie.movieId);

    api
      .deleteMovie(film._id)
      .then(() => {
        setSavedMovies((state) => state.filter((c) => c._id !== film._id));
      })
      .catch((error) => alert(error));
  }

  return (
    <AppContext.Provider value={{ isLoading }}>
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentLoggedInContext.Provider value={loggedIn}>
          <div className="page">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="/signin"
                element={
                  loggedIn ? (
                    <Navigate to={"/movies"} replace />
                  ) : (
                    <Login onLogin={handleLogin} />
                  )
                }
              />
              <Route
                path="/signup"
                element={
                  loggedIn ? (
                    <Navigate to={"/movies"} replace />
                  ) : (
                    <Register onRegister={handleRegister} />
                  )
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={Profile}
                    onLogout={handleLogout}
                    onUserUpdate={handleUserUpdate}
                    requestMessage={errorRequestMessage}
                    successRequestMessage={successRequestMessage}
                    resetErrorRequestMessage={resetErrorRequestMessage}
                    resetSuccessRequestMessage={resetSuccessRequestMessage}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    element={SavedMovies}
                    setIsLoading={setIsLoading}
                    onSavedMovie={handleSavedMoviesCreate}
                    onDeleteMovie={handleSavedMoviesDelete}
                    savedMovies={savedMovies}
                  />
                }
              />
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={Movies}
                    setIsLoading={setIsLoading}
                    onSavedMovie={handleSavedMoviesCreate}
                    onDeleteMovie={handleSavedMoviesDelete}
                    savedMovies={savedMovies}
                  />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </CurrentLoggedInContext.Provider>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
