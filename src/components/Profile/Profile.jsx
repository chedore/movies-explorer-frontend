import "./Profile.css";
import React, { useState } from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

export default function Profile() {
  const [name, setName] = useState("Виталий");
  const [email, setEmail] = useState("pochta@yandex.ru");

  return (
    <main className="profile">
      <Header />
      <main>
        <h1 className="profile__title">Привет, {name}!</h1>

        <div className="profile__container">
          <div className="profile__element">
            <label className="profile__name">Имя</label>
            <label className="profile__input">{name}</label>
          </div>
          <div className="profile__element">
            <label className="profile__name">E-mail</label>
            <label className="profile__input">{email}</label>
          </div>
        </div>
        <div className="profile__buttons">
          <button className="button profile__button-edit">Редактировать</button>
          <Link className="link profile__link-exit" to="/signin">
            Выйти из аккаунта
          </Link>
        </div>
      </main>
    </main>
  );
}
