import "./MoviesCardList.css";
import { startCards, saveCards } from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState } from "react";

export default function MoviesCardList({ showMode = "" }) {
  const [massCards, setMassCards] = useState(showMode ? saveCards : startCards);

  return (
    <section className="moviescard">
      <div className="moviescard__container">
        <p className="line"></p>
        <ul className="moviescard__list">
          {massCards.slice().map((movie, i) => (
            <MoviesCard movie={movie} showMode={showMode} key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
