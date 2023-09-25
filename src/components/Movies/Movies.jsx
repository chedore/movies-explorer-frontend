import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { useState } from "react";

export default function Movies() {
  const [isEmpty, setIsEmpty] = useState(true);

  function handleSearchMovies(search, isShortFilms) {
    if (search.length === 0) setIsEmpty(false);
    else setIsEmpty(true);
  }

  return (
    <>
      <Header />
      <main>
        <SearchForm onSearch={handleSearchMovies} />
        {!isEmpty ? <></> : <MoviesCardList />}

        <section className="moviesbytton">
          {!isEmpty ? (
            <p className="moviesempty">Нужно ввести ключевое слово</p>
          ) : (
            <button type="button" className="bytton moviesbytton-moremovies">
              Ещё
            </button>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
