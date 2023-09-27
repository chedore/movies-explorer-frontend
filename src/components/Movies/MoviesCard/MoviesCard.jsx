import "./MoviesCard.css";
import { convertDuration } from "../../../utils/MovieTransform";

export default function MoviesCard({
  movie,
  showMode = "",
  onSavedMovie,
  onDeleteMovie,
  savedMovies,
}) {
  const handleCreateClick = () => {
    isLiked = true;
    onSavedMovie(movie);
  };
  const handleDeleteClick = () => onDeleteMovie(movie);

  let isLiked = false;
  isLiked = savedMovies.some((item) => {
    if (item.movieId === movie.movieId) {
      return true;
    }
    return false;
  });

  return (
    <li className="movie">
      <>
        <a
          href={movie.trailerLink}
          className="movies-card__link"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <img
            className="movie__image"
            src={movie.image}
            alt={`Постер к фильму: ${movie.name}`}
          />
        </a>
      </>
      {showMode ? (
        <button
          type="button"
          className={`button movie__button movie__button-close`}
          onClick={handleDeleteClick}
        ></button>
      ) : (
        <button
          type="button"
          className={`button movie__button ${
            isLiked ? "movie__button-like" : "movie__button-save"
          }`}
          onClick={handleCreateClick}
          disabled={isLiked}
        ></button>
      )}

      <div className="movie__description">
        <h2 className="movie__name">{movie.nameRU}</h2>
        <p className="movie__time">{convertDuration(movie.duration)}</p>
      </div>
    </li>
  );
}
