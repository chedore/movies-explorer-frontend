import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { apiMovies } from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";
import AppContext from "../../contexts/AppContext";
import { useContext, useState, useEffect } from "react";
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

  const [allMovies, setAllMovies] = useState(
    JSON.parse(localStorage.getItem("allMovies")) ?? []
  );

  const [searchMovies, setSearchMovies] = useState(
    JSON.parse(localStorage.getItem("searchMovies")) ?? []
  );

  const [shorts, setShorts] = useState( false  );
  const [search, setSearch] = useState("");

  const [defaultMoviesCards, setDefaultMoviesCards] = useState(
    handleStartMoviesCards(width)
  );

  //поведение при обновлении страницы
  useEffect(() => {
    console.log("обновлен MoviesCardList", allMovies);
    if (allMovies.length > 0) {
      filterMovies(allMovies);
    }
  }, [allMovies, search, shorts]);

  //поведение при обновлении страницы
  useEffect(() => {
    console.log("страница обновлена");
  }, []);

  function filterMovies(allMovies) {
    console.log(`search=${search}, shorts=${shorts}`)
    // отфильтровываем фильмы по ключевому слову и короткометражки
    const filterMovies = onFilteredMovies(allMovies, search, shorts) ?? [];
    const transformFilterMovies = transformMovieHandle(filterMovies);

    // сообщения об ошибке при поиске
    if (search.length === 0) {
      setErrorMessage(KEYWORD_NOT_FOUND);
    } else if (filterMovies.length === 0) {
      setErrorMessage(MOVIES_NOT_FOUND);
    } else {
      setErrorMessage("");
    }
    localStorage.setItem("searchMovies", JSON.stringify(transformFilterMovies));
    setSearchMovies(transformFilterMovies);
  }

  // // поиск
  async function handleSubmit(searchForm, shortsForm) {
    setIsLoading(true);
    setSearch(searchForm)
    setShorts(shortsForm)
    if (allMovies.length === 0) {
      const moviesFromServer = await apiMovies
        .getMovies()
        .then((movies) => {
          localStorage.setItem("allMovies", JSON.stringify(movies));
          setAllMovies(movies);
          console.log("получено от сервера:", movies.length);

        })
        .catch(() => {
          setErrorMessage(RECEIVING_DATA_ERROR);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    setIsLoading(false);
  }

  // // кнопка ещё
  function handleAddMoviesCards() {
    setDefaultMoviesCards(handleUploadMoreCards(width, defaultMoviesCards));
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm
          onSearch={handleSubmit}
          isShorts={shorts}
          inputSearchDefault={search}
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
          {searchMovies.length > defaultMoviesCards && (
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
