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
        <div className="navigatemenu-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `link navigatemenu-link ${isActive ? "active" : ""}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `link navigatemenu-link ${isActive ? "active" : ""}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              `link navigatemenu-link ${isActive ? "active" : ""}`
            }
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link to="/profile" className="button navigatemenu-account">
          Аккаунт
        </Link>
      </div>
    </div>
  );
}
