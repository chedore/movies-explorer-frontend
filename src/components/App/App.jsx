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
import { CurrentAllMoviesContext } from "../../contexts/CurrentAllMoviesContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { api } from "../../utils/MainApi";
import { apiMovies } from "../../utils/MoviesApi";
import transformMovieHandle from '../../utils/MovieTransform';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  

  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  useEffect(() => {
    checkTocken();
    if (loggedIn) handleGetAllMovies();
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
          console.log(err);
        });
    }
  }

  function handleLogin(email, password) {
    api
      .login({ email, password })
      .then((res) => {
        if (res.token) localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleRegister(name, email, password) {
    api
      .register({ name, email, password })
      .then((res) => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
  }

  function handleUserUpdate(name, email) {
    api
      .userProfile({ name, email })
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleGetAllMovies() {
    apiMovies.getMovies()
    .then((allMovies) => {
      const transAllMovies = transformMovieHandle(allMovies);
      setAllMovies(transAllMovies);
    })
    .catch((err) => {
      console.log(err);
    });

  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentLoggedInContext.Provider value={loggedIn}>
      <CurrentAllMoviesContext.Provider value={allMovies}>
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
              element={<ProtectedRoute element={SavedMovies} />}
            />
            <Route
              path="/movies"
              element={<ProtectedRoute element={Movies} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        </CurrentAllMoviesContext.Provider>
      </CurrentLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
