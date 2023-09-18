import "./NavigationLanding.css";
import { Link } from "react-router-dom";

export default function NavigationLanding() {
  return (
    <div className="navigate__group">
      <Link className="link navigate__link" to="/signup">
        Регистрация
      </Link>
      <Link className="link navigate__button" to="/signin">
        Войти
      </Link>
    </div>
  );
}
