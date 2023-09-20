import "./MoviesCardList.css";
import { startCards, saveCards } from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";

export default function MoviesCardList({ showMode = "" }) {
  const [massCards, setMassCards] = useState(showMode? saveCards: startCards);

  return (
    <section className="moviescardlist__container">
      <p className="line"></p>
      <ul className="movies__list">
        {massCards.slice().map((movie, i) => (
          <MoviesCard movie={movie} showMode={showMode} key={i} />
        ))}
      </ul>
    </section>
  );
}
