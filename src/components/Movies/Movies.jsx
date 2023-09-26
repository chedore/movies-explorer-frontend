import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { useState, useContext, useEffect } from "react";
import { CurrentAllMoviesContext } from "../../contexts/CurrentAllMoviesContext";
import { KEYWORD_NOT_FOUND, MOVIES_NOT_FOUND } from "../../utils/constants";
import useWindowWidth from "../../utils/WindowWidth";
import { api } from "../../utils/MainApi";
import {
  handleSearch,
  handleFilter,
  handleStartMoviesCards,
  handleUploadMoreCards,
} from "../../utils/MoviesFilter";

export default function Movies() {
  const allMovies = useContext(CurrentAllMoviesContext);
  const [massCards, setMassCards] = useState([]);
  const [massSaveCards, setMassSaveCards] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);
  const { width } = useWindowWidth();
  const [defaultMoviesCards, setDefaultMoviesCards] = useState(0);

  useEffect(() => {
    handleStartMoviesCards();
  }, [massCards, width]);

  useEffect(() => {
    const promises = [api.getMovies()];
    Promise.all(promises)
      .then(([cards]) => {
        setMassSaveCards(cards);
      })
      .catch((error) => alert(error));
  }, []);

  function handleSearchMovies(search, isShortFilms) {
    if (search.length === 0) {
      setIsEmpty(false);
    } else {
      // если ключевое слово заполненно
      setIsEmpty(true);
      setDefaultMoviesCards(handleStartMoviesCards(width));
      let moviesToRender = handleSearch(allMovies, search);
      if (isShortFilms) {
        moviesToRender = handleFilter(moviesToRender);
      }
      setMassCards(moviesToRender);
    }
  }

  function handleAddMoviesCards() {
    setDefaultMoviesCards(handleUploadMoreCards(width, defaultMoviesCards));
  }

  function handleCardCreate(movie) {
    api
      .createMovie({ movie })
      .then((newCard) => {
        setMassSaveCards([newCard, ...massSaveCards]);
      })
      .catch((error) => alert(error));
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm onSearch={handleSearchMovies} />
        {massCards.length === 0 ? (
          <p className="moviesempty">{MOVIES_NOT_FOUND}</p>
        ) : (
          <MoviesCardList
            movies={massCards.slice(0, defaultMoviesCards)}
            onCardCreate={handleCardCreate}
            savedMovies={massSaveCards}
          />
        )}

        <section className="moviesbytton">
          {!isEmpty ? (
            <p className="moviesempty">{KEYWORD_NOT_FOUND}</p>
          ) : (
            <button
              type="button"
              className="bytton moviesbytton-moremovies"
              onClick={handleAddMoviesCards}
            >
              Ещё
            </button>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
