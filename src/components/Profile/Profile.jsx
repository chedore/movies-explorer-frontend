import "./Profile.css";
import React, { useState, useContext, useEffect } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormValidation } from "../../hooks/useFormValidation";

export default function Profile({ onLogout, onUserUpdate }) {
  const user = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { formValue, handleChange } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formValue;
    onUserUpdate(name, email);
  };

  useEffect(() => {
    setName(formValue.name);
    setEmail(formValue.email);
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
              value={name}
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
              value={email}
              name="email"
              required
              onChange={handleChange}
            />
          </div>
        </form>
        <div className="profile__buttons">
          <button
            className="button profile__button-edit"
            onClick={handleSubmit}
          >
            Редактировать
          </button>
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
