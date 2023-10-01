export const regexName = /^[a-zA-zа-яА-ЯёЁ -]+$/u;
// eslint-disable-next-line no-useless-escape
export const regexEmail = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;

// конфиг для api (работа с сервером)
export const apiConfig = {
  baseUrl: 'https://api.sprozhir.nomoredomainsicu.ru',
  headers: {
    "Content-Type": "application/json"
  }
}

// конфиг для api (работа с сервером Яндекс)
export const apiMoviesConfig = {
  baseUrl: 'https://api.nomoreparties.co',
  headers: {
    "Content-Type": "application/json"
  }
}

export const MOVIES_NOT_FOUND = 'Ничего не найдено';
export const KEYWORD_NOT_FOUND = 'Нужно ввести ключевое слово';
export const RECEIVING_DATA_ERROR = 'Во время запроса произошла ошибка. ' +
'Возможно, проблема с соединением или сервер недоступен. ' +
'Подождите немного и попробуйте ещё раз.';
export const EDIT_PROFILE_SUCCESS = "Обновление данных прошло успешно"
export const EDIT_PROFILE_ERROR="Не удалось обновить данные пользователя"

export const WIDTH_3_MOVIES = 1200;
export const WIDTH_2_MOVIES = 750;

export const MOVIES_3_RENDER = 12;
export const MOVIES_2_RENDER = 8;
export const MOVIES_1_RENDER = 5;

export const MOVIES_3_ADD = 3;
export const MOVIES_2_ADD = 2;
export const MOVIES_1_ADD = 2;

export const SHORT_FILM = 40;


export const startCards = [
  {
    name: '33 слова о дизайне',
    time: '1ч 17м',
    image: '../poster/1.svg'
  },
  {
    name: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м',
    image: '../poster/2.svg'
  },
  {
    name: 'В погоне за Бенкси',
    time: '1ч 17м',
    image: '../poster/3.svg'
  },
  {
    name: 'Баския: Взрыв реальности',
    time: '1ч 17м',
    image: '../poster/4.svg'
  },
  {
    name: 'Бег это свобода',
    time: '1ч 17м',
    image: '../poster/5.svg'
  },
  {
    name: 'Книготорговцы',
    time: '1ч 17м',
    image: '../poster/6.svg'
  },
  {
    name: 'Когда я думаю о Германии ночью',
    time: '1ч 17м',
    image: '../poster/7.svg'
  },
  {
    name: 'Gimme Danger: История Игги и The Stooges',
    time: '1ч 17м',
    image: '../poster/8.svg'
  },
  {
    name: 'Дженис: Маленькая девочка грустит',
    time: '1ч 17м',
    image: '../poster/9.svg'
  },
  {
    name: 'Соберись перед прыжком',
    time: '1ч 17м',
    image: '../poster/10.svg'
  },
  {
    name: 'Пи Джей Харви: A dog called money',
    time: '1ч 17м',
    image: '../poster/11.svg'
  },
  {
    name: 'По волнам: Искусство звука в кино',
    time: '1ч 17м',
    image: '../poster/12.svg'
  }
]

export const saveCards = [
  {
    name: '33 слова о дизайне',
    time: '1ч 17м',
    image: '../poster/1.svg'
  },
  {
    name: 'Киноальманах «100 лет дизайна»',
    time: '1ч 17м',
    image: '../poster/2.svg'
  },
  {
    name: 'В погоне за Бенкси',
    time: '1ч 17м',
    image: '../poster/3.svg'
  }
]