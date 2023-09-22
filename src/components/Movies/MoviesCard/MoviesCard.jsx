import "./MoviesCard.css";
import { useState } from "react";

export default function MoviesCard({ movie, showMode = "" }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClick() {
    setIsLiked(!isLiked);
  }

  return (
    <li className="movie">
      <img
        className="movie__image"
        src={movie.image}
        alt={`Постер к фильму: ${movie.name}`}
      />
      {showMode ? (
        <button
          type="button"
          className={`button movie__button movie__button-close`}
        ></button>
      ) : (
        <button
          type="button"
          className={`button movie__button ${
            isLiked ? "movie__button-like" : "movie__button-save"
          }`}
          onClick={handleLikeClick}
        ></button>
      )}

      <div className="movie__description">
        <h2 className="movie__name">{movie.name}</h2>
        <p className="movie__time">{movie.time}</p>
      </div>
    </li>
  );
}
