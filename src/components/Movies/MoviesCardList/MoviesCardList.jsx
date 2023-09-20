import "./MoviesCardList.css";
import { startCards } from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
  return (
    <section className="moviescardlist__container">
      <p className="line"></p>
      <ul className="movies__list">
        {startCards.slice().map((movie, i) => (
          <MoviesCard movie={movie} key={i} />
        ))}
      </ul>
    </section>
  );
}
