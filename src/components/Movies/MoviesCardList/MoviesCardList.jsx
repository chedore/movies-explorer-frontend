import "./MoviesCardList.css";

import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ showMode = "", movies = [] }) {
  return (
    <section className="moviescard">
      <div className="moviescard__container">
        <p className="line"></p>
        <ul className="moviescard__list">
          {movies.slice().map((movie, i) => (
            <MoviesCard movie={movie} showMode={showMode} key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
