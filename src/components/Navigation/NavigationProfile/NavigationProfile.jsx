import "./NavigationProfile.css";
import { NavLink, Link } from "react-router-dom";
import React, { useState } from "react";
import menu from "../../../images/menu_icon.svg";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

export default function NavigationProfile() {
  const [isOpenMenu, setIsOpenMenu] = useState(true);

  function handleMenuClick() {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <>
      <div className="navigate__profile">
        <div className="navigate__profile-links">
          <NavLink to="/movies" className="link navigate__profile-link">
            Фильмы
          </NavLink>

          <NavLink
            to="/saved-movies"
            className="link navigate__profile-link"
          >
            Сохранённые фильмы
          </NavLink>
        </div>
      </div>
      <Link to="/profile" className="navigate__profile-account">
        Аккаунт
      </Link>
      <img
        className="navigate__profile-icon"
        src={menu}
        alt="Меню"
        onClick={handleMenuClick}
      />

      {!isOpenMenu ? (
        <NavigationMenu isOpen={isOpenMenu} onClose={handleMenuClick} />
      ) : (
        console.log("2")
      )}
    </>
  );
}
