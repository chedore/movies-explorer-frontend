import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import { api } from "../../utils/MainApi";


export default function SavedMovies() {
  const [massCards, setMassCards] = useState([]);


  useEffect(() => {
    const promises = [api.getMovies()];
    Promise.all(promises)
      .then(([cards]) => {
        setMassCards(cards);
      })
      .catch((error) => alert(error));
  }, []);

  function handleCardDelete (movie) {
    api
      .deleteMovie(movie._id)
      .then(() => {
        setMassCards(state => state.filter((c) => c._id !== movie._id));
      })
      .catch((error) => alert(error));
  }
  

  return (
    <>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList showMode={'saved-movies'} movies={massCards} onCardDelete={handleCardDelete} savedMovies={massCards}/>
      </main>
      <Footer />
    </>
  );
}