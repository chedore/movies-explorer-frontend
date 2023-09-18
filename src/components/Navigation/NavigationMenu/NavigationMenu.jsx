import "./NavigationMenu.css";
import close from "../../../images/close_icon.svg";
import { NavLink, Link } from "react-router-dom";

export default function NavigationMenu({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? "" : "popup_opened"}`}>
      <div className="popup__container">
        <img
          className="popup__close-icon"
          src={close}
          alt="Закрыть"
          onClick={onClose}
        />
        <div className="navigate__menu-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `link navigate__menu-link ${isActive ? "active" : ""}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `link navigate__menu-link ${isActive ? "active" : ""}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `link navigate__menu-link ${isActive ? "active" : ""}`
            }
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link to="/profile" className="navigate__menu-account">
          Аккаунт
        </Link>
      </div>
    </div>
  );
}
