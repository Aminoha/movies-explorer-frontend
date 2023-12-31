export const RES_ERRORS = {
  SERVER_500: 'На сервере произошла ошибка',

  SIGNUP_409: 'Пользователь с таким email уже существует',
  SIGNUP_DEFAUTLT: 'При регистрации пользователя произошла ошибка',

  SIGNIN_401: 'Вы ввели неправильный логин или пароль',
  SIGNIN_INCORRET_TOKEN:
    'При авторизации произошла ошибка. Токен не передан или передан не в том формате.',
  SIGNIN_INVALID_TOKEN:
    'При авторизации произошла ошибка. Переданный токен некорректен.',
  SIGNIN_DEFAULT: 'При входе произошла ошибка.',

  UPDATE_PROFILE: 'Пользователь с таким email уже существует',
  UPDATE_DEFAULT_400: 'При обновлении профиля произошла ошибка',
  UPDATE_SUCCESS: 'Данные изменены',

  SEARCH_ERROR:
    'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',
};

export const ERRORS = {
  NOT_FOUND: 'Ничего не найдено',
  NEED_LETTERS: 'Нужно ввести ключевое слово',
};

export const shortDuration = 40;


export const WIDTH_SIZE = {BIG: 1027, MEDIUM: 649}
export const COUNT_CARD = {MAX: 12, MEDIUM: 8, SMALL: 5}
export const ADD_CARD = {MAX: 3, MIN: 2}