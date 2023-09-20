import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";

export default function Movies() {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList />
        <div className="movies__bytton-container">
          <button type="button" className="bytton movies__bytton-more-movies">
            Ещё
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
