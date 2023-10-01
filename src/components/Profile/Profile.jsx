import "./Profile.css";
import "../Form/Form.css";
import React, { useState, useEffect, useContext } from "react";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile({
  onLogout,
  onUserUpdate,
  requestMessage,
  successRequestMessage,
  resetErrorRequestMessage,
  resetSuccessRequestMessage,
}) {
  const navigate = useNavigate();
  const { name, email } = useContext(CurrentUserContext);
  const [isEditProfile, setIsEditProfile] = useState(false);

  const { formValue, handleChange, errors, isValid, setFormValue, setIsValid } =
    useFormValidation({});

  function handleClickEditProfile(evt) {
      evt.preventDefault();
      setIsEditProfile(true);
  }

  const handleSaveSubmit = (e) => {
    e.preventDefault();
    onUserUpdate(formValue.name, formValue.email);
    console.log(successRequestMessage)
  };

  // отрисовка данных пользователя
  useEffect(() => {
    setFormValue({ name, email });
    setIsEditProfile(false);
  }, [name, email]);

  // валидация, если данные изменены совпадают с текущими данными пользователя
  useEffect(() => {
    if (formValue.name === name && formValue.email === email) {
      setIsValid(false);
    }
  }, [formValue]);

    // очистка сообщения об ошибке от сервера
    useEffect(() => {
      resetErrorRequestMessage();
    }, [formValue]);
    // очистка сообщения об успешном обновлении данных от сервера
    useEffect(() => {
      resetSuccessRequestMessage();
    }, [navigate]);

  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__title">Привет, {name}!</h1>

        <form className="profile__container">
          <div className="profile__element">
            <label className="profile__name">Имя</label>
            <input
              type="text"
              id="form-name-input"
              className="input profile__input"
              placeholder="Введите имя"
              name="name"
              value={formValue.name ?? ""}
              minLength="2"
              maxLength="40"
              required
              onChange={handleChange}
              disabled={!isEditProfile}
            />
          </div>
          <div className="profile__element">
            <label className="profile__name">E-mail</label>
            <input
              type="email"
              id="form-email-input"
              className="input profile__input"
              placeholder="Введите почту"
              value={formValue.email ?? ""}
              name="email"
              required
              onChange={handleChange}
              disabled={!isEditProfile}
            />
          </div>
        </form>
        <div className="profile__buttons">
          {isEditProfile ? (
            <>
            <span className="profile__button_error">
                  {requestMessage}
                </span>
            <button
              className={`button profile__button-edit ${
                !isValid && "form__button_disabled"
              }`}
              onClick={handleSaveSubmit}
              disabled={!isValid}
            >
              Сохранить
            </button>
            </>
          ) : (
            <>
              <span className="profile__button_success">{successRequestMessage}</span>

              <button
                className="button profile__button-edit"
                onClick={handleClickEditProfile}
              >
                Редактировать
              </button>
            </>
          )}
          <Link
            className="link profile__link-exit"
            to="/signin"
            onClick={onLogout}
          >
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </>
  );
}
