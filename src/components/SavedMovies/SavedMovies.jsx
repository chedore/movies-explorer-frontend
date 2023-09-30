import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { useContext, useState } from "react";
import Preloader from "../Preloader/Preloader";
import AppContext from "../../contexts/AppContext";
import { useEffect } from "react";
import { onFilteredMovies } from "../../utils/MoviesFilter";
import { KEYWORD_NOT_FOUND, MOVIES_NOT_FOUND } from "../../utils/constants";

export default function SavedMovies({
  setIsLoading,
  onSavedMovie,
  onDeleteMovie,
  savedMovies,
}) {
  const app = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [shorts, setShorts] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filterMovies = onFilteredMovies(savedMovies, search, shorts);
    setSearchMovies(filterMovies);
  }, [savedMovies, search, shorts]);

  // поиск
  async function handleSubmit(searchForm, shortsForm) {
    setIsSearchActive(true);
    setIsLoading(true);
    setSearch(searchForm);
    setShorts(shortsForm);

    // отфильтровываем фильмы по ключевому слову и короткометражки
    const filterMovies = onFilteredMovies(savedMovies, searchForm, shortsForm);
    setSearchMovies(filterMovies);

    if (savedMovies.length === 0 || filterMovies.length === 0) {
      setErrorMessage(MOVIES_NOT_FOUND);
    } else {
      setErrorMessage("");
    }

    setIsLoading(false);
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm onSearch={handleSubmit} />
        {app.isLoading && <Preloader />}
        <MoviesCardList
          showMode={"saved-movies"}
          errorMessage={errorMessage}
          movies={isSearchActive ? searchMovies : savedMovies}
          onSavedMovie={onSavedMovie}
          onDeleteMovie={onDeleteMovie}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </>
  );
}
