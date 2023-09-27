import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { apiMovies } from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import AppContext from "../../contexts/AppContext";
import { useContext, useState } from "react";
import {
  RECEIVING_DATA_ERROR,
  KEYWORD_NOT_FOUND,
  MOVIES_NOT_FOUND,
} from "../../utils/constants";
import {
  onFilteredMovies,
  handleStartMoviesCards,
  handleUploadMoreCards,
} from "../../utils/MoviesFilter";
import transformMovieHandle from "../../utils/MovieTransform";
import useWindowWidth from "../../utils/WindowWidth";

export default function Movies({
  setIsLoading,
  onSavedMovie,
  onDeleteMovie,
  savedMovies,
}) {
  const app = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState("");
  const { width } = useWindowWidth();
  const searchMoviesDefault =
    JSON.parse(localStorage.getItem("searchMovies")) ?? [];
 
  const isShorts = JSON.parse(localStorage.getItem("shorts")) ?? false;
  const inputSearchDefault = localStorage.getItem("search") ?? "";
  const [searchMovies, setSearchMovies] = useState(searchMoviesDefault);

  const [defaultMoviesCards, setDefaultMoviesCards] = useState(handleStartMoviesCards(width));


  // поиск
  function handleSubmit(search, shorts) {
    setIsLoading(true);
    apiMovies
      .getMovies()
      .then((allMovies) => {
        localStorage.setItem("search", search);
        localStorage.setItem("shorts", shorts);

        // отфильтровываем фильмы по ключевому слову и короткометражки
        const filterMovies = onFilteredMovies(allMovies, search, shorts);
        const transformFilterMovies = transformMovieHandle(filterMovies);
        localStorage.setItem(
          "searchMovies",
          JSON.stringify(transformFilterMovies)
        );
        setSearchMovies(transformFilterMovies);

        // сообщения об ошибке при поиске
        if (search.length === 0) {
          setErrorMessage(KEYWORD_NOT_FOUND);
        } else if (
          transformFilterMovies.length === 0 ||
          allMovies.length === 0
        ) {
          setErrorMessage(MOVIES_NOT_FOUND);
        } else {
          setErrorMessage("");
        }
      })
      .catch(() => {
        setErrorMessage(RECEIVING_DATA_ERROR);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // кнопка ещё
  function handleAddMoviesCards() {
    setDefaultMoviesCards(handleUploadMoreCards(width, defaultMoviesCards));
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm
          onSearch={handleSubmit}
          isShorts={isShorts}
          inputSearchDefault={inputSearchDefault}
        />
        {app.isLoading && <Preloader />}
        <MoviesCardList
          errorMessage={errorMessage}
          movies={searchMovies.slice(0, defaultMoviesCards)}
          onSavedMovie={onSavedMovie}
          onDeleteMovie={onDeleteMovie}
          savedMovies={savedMovies}
        />
        <section className="moviesbytton">
          <button
            type="button"
            className="bytton moviesbytton-moremovies"
            onClick={handleAddMoviesCards}
          >
            Ещё
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
