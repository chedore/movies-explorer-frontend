import "./Profile.css";
import "../Form/Form.css";
import React, { useState, useEffect, useContext } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { EDIT_PROFILE_SUCCESS } from "../../utils/constants";

export default function Profile({ onLogout, onUserUpdate }) {
  const { name, email } = useContext(CurrentUserContext);
  const [successMessage, setSuccessMessage] = useState("");


  const { formValue, isValid, handleChange, setFormValue, setIsValid } =
    useFormValidation(2);
  const [isEditProfile, setIsEditProfile] = useState(false);

  const handleSaveSubmit = (e) => {
    e.preventDefault();
    onUserUpdate(formValue.name, formValue.email);
    setSuccessMessage(EDIT_PROFILE_SUCCESS)
    setIsEditProfile(false);
  };

  // отрисовка данных пользователя
  useEffect(() => {
    setFormValue({ name, email });
  }, [name, email]);

  // валидация, если данные изменены совпадают с текущими данными пользователя
  useEffect(() => {
    if (formValue.name === name && formValue.email === email) {
      setIsValid(false);
    }
  }, [formValue]);

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
            <button
              className={`button profile__button-edit ${
                !isValid && "form__button_disabled"
              }`}
              onClick={handleSaveSubmit}
              disabled={!isValid}
            >
              Сохранить
            </button>
          ) : (
            <>
              <span className="profile__button_success">
                {successMessage}
              </span>

              <button
                className="button profile__button-edit"
                onClick={(e) => {
                  setIsEditProfile(true);
                }}
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
