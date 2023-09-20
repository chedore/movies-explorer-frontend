import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

export default function SavedMovies() {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList showMode={'saved-movies'} />
      </main>
      <Footer />
    </>
  );
}