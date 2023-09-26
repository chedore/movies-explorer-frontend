import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { useState, useContext, useEffect } from "react";
import { CurrentAllMoviesContext } from "../../contexts/CurrentAllMoviesContext";
import {
  KEYWORD_NOT_FOUND,
  SHORT_FILM,
  MOVIES_NOT_FOUND,
  WIDTH_2_MOVIES,
  WIDTH_3_MOVIES,
  MOVIES_3_RENDER,
  MOVIES_2_RENDER,
  MOVIES_1_RENDER,
  MOVIES_1_ADD,
  MOVIES_2_ADD,
  MOVIES_3_ADD,
} from "../../utils/constants";
import useWindowWidth from "../../utils/WindowWidth";

export default function Movies() {
  const allMovies = useContext(CurrentAllMoviesContext);
  const [massCards, setMassCards] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const { width } = useWindowWidth();
  const [defaultMoviesCards, setDefaultMoviesCards] = useState(0);

  useEffect(() => {
    handleStartMoviesCards();
  }, [massCards, width]);

  //фильтруем по ключевому слову
  function handleSearch(keyword) {
    return allMovies.filter((movie) => {
      const a = keyword.toLowerCase().trim();
      return (
        movie.nameRU.toLowerCase().indexOf(a) !== -1 ||
        movie.nameEN.toLowerCase().indexOf(a) !== -1
      );
    });
  }

  //фильтруем по продолжительности
  function handleFilter(moviesArray) {
    return moviesArray.filter((movie) => {
      return movie.duration <= SHORT_FILM;
    });
  }

  function handleSearchMovies(search, isShortFilms) {
    if (search.length === 0) {
      setIsEmpty(false);
    } else {
      // если ключевое слово заполненно
      setIsEmpty(true);
      handleStartMoviesCards();
      let moviesToRender = handleSearch(search);
      if (isShortFilms) {
        moviesToRender = handleFilter(moviesToRender);
      }
      setMassCards(moviesToRender);
      console.log("res", moviesToRender);
      console.log(width);
    }
  }

  function handleStartMoviesCards() {
    if (width > WIDTH_3_MOVIES) setDefaultMoviesCards(MOVIES_3_RENDER);
    else if (width <= WIDTH_3_MOVIES && width > WIDTH_2_MOVIES)
      setDefaultMoviesCards(MOVIES_2_RENDER);
    else setDefaultMoviesCards(MOVIES_1_RENDER);
  }

  function handleAddMoviesCards() {
    if (width > WIDTH_3_MOVIES)
      setDefaultMoviesCards(defaultMoviesCards + MOVIES_3_ADD);
    else if (width <= WIDTH_3_MOVIES && width > WIDTH_2_MOVIES)
      setDefaultMoviesCards(defaultMoviesCards + MOVIES_2_ADD);
    else setDefaultMoviesCards(defaultMoviesCards + MOVIES_1_ADD);
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm onSearch={handleSearchMovies} />
        {massCards.length === 0 ? (
          <p className="moviesempty">{MOVIES_NOT_FOUND}</p>
        ) : (
          <MoviesCardList movies={massCards.slice(0, defaultMoviesCards)} />
        )}

        <section className="moviesbytton">
          {!isEmpty ? (
            <p className="moviesempty">{KEYWORD_NOT_FOUND}</p>
          ) : (
            <button type="button" className="bytton moviesbytton-moremovies" onClick={handleAddMoviesCards}>
              Ещё
            </button>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
