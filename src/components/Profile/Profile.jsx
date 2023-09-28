import "./Profile.css";
import "../Form/Form.css";
import React, { useState, useEffect, useContext } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useFormValidation } from "../../hooks/useFormValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Profile({ onLogout, onUserUpdate }) {
  const user = useContext(CurrentUserContext);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const { formValue, handleChange, isValid } = useFormValidation(2);
  const [isEditProfile, setIsEditProfile] = useState(false);

  const handleSaveSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formValue;
    onUserUpdate(name, email);
    setIsEditProfile(false);
  };

  useEffect(() => {
    setName(!isEditProfile ? user.name : formValue.name);
    setEmail(!isEditProfile ? user.email : formValue.email);
  }, [user, formValue, isEditProfile]);

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
              value={name ?? ""}
              minLength="2"
              maxLength="40"
              required
              onChange={handleChange}
            />
          </div>
          <div className="profile__element">
            <label className="profile__name">E-mail</label>
            <input
              type="email"
              id="form-email-input"
              className="input profile__input"
              placeholder="Введите почту"
              value={email ?? ""}
              name="email"
              required
              onChange={handleChange}
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
            <button
              className={`button profile__button-edit ${
                !isValid && "form__button_disabled"
              }`}
              onClick={(e) => {
                setIsEditProfile(true);
              }}
            >
              Редактировать
            </button>
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
