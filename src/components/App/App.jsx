import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn")) ?? false;
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const jwt = localStorage.getItem("jwt");

  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  useEffect(() => {
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

  function handleLogin(email, password) {
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
      });
  }

  function handleRegister(name, email, password) {
    api
      .register({ name, email, password })
      .then((res) => {
        handleLogin(email, password);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleLogout() {
    setCurrentUser({});
    setSavedMovies([]);
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("jwt");
    localStorage.removeItem("shorts");
    localStorage.removeItem("search");
    localStorage.removeItem("searchMovies");
    localStorage.removeItem("allMovies");
  }

  function handleUserUpdate(name, email) {
    api
      .userProfile({ name, email })
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        alert(err);
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
    api
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies(state => state.filter((c) => c._id !== movie._id));
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
              <Route path="/signin" element={<Login onLogin={handleLogin} />} />
              <Route
                path="/signup"
                element={<Register onRegister={handleRegister} />}
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={Profile}
                    onLogout={handleLogout}
                    onUserUpdate={handleUserUpdate}
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
