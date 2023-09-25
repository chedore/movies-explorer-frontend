import "./MoviesCardList.css";
import { startCards, saveCards } from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useState , useContext} from "react";
import { CurrentAllMoviesContext } from "../../../contexts/CurrentAllMoviesContext";

export default function MoviesCardList({ showMode = "" }) {
  const allMovies = useContext(CurrentAllMoviesContext);
  console.log(allMovies.slice(2, 4))
  //const [massCards, setMassCards] = useState(showMode ? saveCards : startCards);
  const [massCards, setMassCards] = useState(allMovies.slice(2, 4));

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
