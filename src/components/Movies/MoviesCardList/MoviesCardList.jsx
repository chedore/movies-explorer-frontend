import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ showMode = "", movies = [] , onCardDelete, onCardCreate, savedMovies}) {
  return (
    <section className="moviescard">
      <div className="moviescard__container">
        <p className="line"></p>
        <ul className="moviescard__list">
          {movies.slice().map((movie, i) => (
            <MoviesCard movie={movie} showMode={showMode} key={i} onCardDelete={onCardDelete} onCardCreate={onCardCreate} savedMovies={savedMovies}/>
          ))}
        </ul>
      </div>
    </section>
  );
}
