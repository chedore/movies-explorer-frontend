import { apiMoviesConfig } from "./constants.js";

export const convertDuration = (mins) => {
  const hours = Math.floor(mins/60);
  const minutes = mins % 60;
  return `${hours}ч ${minutes}м`;
}  

export default function transformMovieHandle(movie) {
  return (
    movie.map((movie) => ({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${apiMoviesConfig.baseUrl}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${apiMoviesConfig.baseUrl}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      // name: movie.nameRU,
      // time: convertDuration(movie.duration),
      // key: movie.id
    }))
  )
}