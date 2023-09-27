import { apiConfig } from "./constants.js";

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  setToken(options) {
    if (!options.headers.authorization) {
      options.headers.authorization = `Bearer ${localStorage.getItem("jwt")}`;
    }
    return options;
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

  /**Универсальный метод запроса с проверкой ответа c токеном*/
  async _request_token(endpoint, options) {
    options = this.setToken(options);
    const url = `${this._baseUrl}${endpoint}`;
    return await fetch(url, options).then(this._checkResponse);
  }

  /**Регистрация пользователя*/
  register({ name, email, password }) {
    return this._request("/signup", {
      method: "POST",
      headers: this._headers,
      // credentials: "include",
      body: JSON.stringify({ name, email, password }),
    });
  }

  /**Авторизация пользователя*/
  login({ email, password }) {
    return this._request("/signin", {
      method: "POST",
      headers: this._headers,
      // credentials: "include",
      body: JSON.stringify({ email, password }),
    });
  }

  /**Проверка токена*/
  authentication() {
    return this._request_token("/users/me", {
      method: "GET",
      headers: this._headers,
      // credentials: "include",
    });
  }

  /**Обновление данных пользователя*/
  userProfile({ name, email }) {
    return this._request_token("/users/me", {
      method: "PATCH",
      headers: this._headers,
      // credentials: "include",
      body: JSON.stringify({ name, email }),
    });
  }

  /**Добавление фильм в сохраненные*/
  createMovie({ movie }) {
    return this._request_token("/movies", {
      method: "POST",
      headers: this._headers,
      // credentials: "include",
      body: JSON.stringify(movie),
    });
  }

  /**Удаление сохранённого фильма по movieId*/
  deleteMovie(movieId) {
    return this._request_token(`/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
      // credentials: "include",
    });
  }

  /**Возвращает все сохранённые текущим пользователем фильмы*/
  getMovies() {
    return this._request_token("/movies", {
      method: "GET",
      headers: this._headers,
      // credentials: "include",
    });
  }
}

export const api = new MainApi(apiConfig);
