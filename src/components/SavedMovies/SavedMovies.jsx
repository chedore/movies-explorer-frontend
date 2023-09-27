import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { useContext, useState } from "react";
import Preloader from "../Preloader/Preloader";
import AppContext from "../../contexts/AppContext";
import {
  onFilteredMovies
} from "../../utils/MoviesFilter";
import {
  KEYWORD_NOT_FOUND,
  MOVIES_NOT_FOUND,
} from "../../utils/constants";

export default function SavedMovies({ setIsLoading, onSavedMovie, onDeleteMovie, savedMovies }) {
  const app = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // поиск
  function handleSubmit(search, shorts) {
    setIsSearchActive(true);
    setIsLoading(true);

    // отфильтровываем фильмы по ключевому слову и короткометражки
    const filterMovies = onFilteredMovies(savedMovies, search, shorts);
    setSearchMovies(filterMovies);

    // сообщения об ошибке при поиске
    if (search.length === 0) {
      setErrorMessage(KEYWORD_NOT_FOUND);
    } else if (
      savedMovies.length === 0 ||
      filterMovies.length === 0
    ) {
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
        <SearchForm onSearch={handleSubmit}/>
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
