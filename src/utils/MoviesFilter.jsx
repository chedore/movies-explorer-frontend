import {
  SHORT_FILM,
  WIDTH_2_MOVIES,
  WIDTH_3_MOVIES,
  MOVIES_3_RENDER,
  MOVIES_2_RENDER,
  MOVIES_1_RENDER,
  MOVIES_1_ADD,
  MOVIES_2_ADD,
  MOVIES_3_ADD,
} from "./constants";

//фильтруем по ключевому слову
function handleSearch(movies, keyword) {
  return movies.filter((movie) => {
    const a = keyword.toLowerCase().trim();
    return (
      movie.nameRU.toLowerCase().indexOf(a) !== -1 ||
      movie.nameEN.toLowerCase().indexOf(a) !== -1
    );
  });
}

//фильтруем по продолжительности
function handleFilter(movies) {
  return movies.filter((movie) => {
    return movie.duration <= SHORT_FILM;
  });
}

export function onFilteredMovies(movies, keyword, shorts) {
  let moviesToRender = [];
  if (keyword.length !== 0) {
    moviesToRender = handleSearch(movies, keyword);
    if (shorts) {
      moviesToRender = handleFilter(moviesToRender);
    }
    return moviesToRender;
  }
  return movies;
}

export function handleStartMoviesCards(width) {
  if (width > WIDTH_3_MOVIES) return MOVIES_3_RENDER;
  else if (width <= WIDTH_3_MOVIES && width > WIDTH_2_MOVIES)
    return MOVIES_2_RENDER;
  else return MOVIES_1_RENDER;
}

export function handleUploadMoreCards(width, defaul) {
  if (width > WIDTH_3_MOVIES) return defaul + MOVIES_3_ADD;
  else if (width <= WIDTH_3_MOVIES && width > WIDTH_2_MOVIES)
    return defaul + MOVIES_2_ADD;
  else return defaul + MOVIES_1_ADD;
}
