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
      <div className="navigateprofile">
        <div className="navigateprofile-links">
          <NavLink to="/movies" className="link navigateprofile-link">
            Фильмы
          </NavLink>

          <NavLink
            to="/saved-movies"
            className="link navigateprofile-link"
          >
            Сохранённые фильмы
          </NavLink>
        </div>
      </div>
      <Link to="/profile" className="button navigateprofile-account">
        Аккаунт
      </Link>
      <img
        className="navigateprofile-icon"
        src={menu}
        alt="Меню"
        onClick={handleMenuClick}
      />
      <NavigationMenu isOpen={isOpenMenu} onClose={handleMenuClick} />

    </>
  );
}
