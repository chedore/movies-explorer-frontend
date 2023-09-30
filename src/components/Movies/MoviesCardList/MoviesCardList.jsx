import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({
  showMode = "",
  errorMessage,
  movies = [],
  onSavedMovie,
  onDeleteMovie,
  savedMovies,
}) {

  return (
    <>
      {errorMessage ? (
        <div className="moviescard__errorcontainer">
          <span className="moviescard__texterror">{errorMessage}</span>
        </div>
      ) : (
        <section className="moviescard">
          <div className="moviescard__container">
            <p className="line"></p>
            <ul className="moviescard__list">
              {movies.slice().map((movie, i) => (
                <MoviesCard
                  movie={movie}
                  showMode={showMode}
                  key={movie.id || movie.movieId}
                  onSavedMovie={onSavedMovie}
                  onDeleteMovie={onDeleteMovie}
                  savedMovies={savedMovies}
                />
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
