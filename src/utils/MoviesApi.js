import { apiMoviesConfig } from "./constants.js";

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  /**Проверить данные от сервера*/
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(
        `Запрос отклонён, ошибка ${res.status}, нам жаль :(`
      );
    }
  }
  /**Универсальный метод запроса с проверкой ответа*/
  async _request(endpoint, options) {
    const url = `${this._baseUrl}${endpoint}`;
    return await fetch(url, options).then(this._checkResponse);
  }

  getMovies() {
    return this._request("/beatfilm-movies", {
      method: "GET",
      headers: this._headers,
      // credentials: "include",
    });
  }
}

export const apiMovies = new MoviesApi(apiMoviesConfig);
