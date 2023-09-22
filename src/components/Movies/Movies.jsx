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
        <section className="moviesbytton">
          <button type="button" className="bytton moviesbytton-moremovies">
            Ещё
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}
