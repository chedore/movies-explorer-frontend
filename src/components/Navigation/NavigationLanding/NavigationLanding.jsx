import "./NavigationLanding.css";
import { Link } from "react-router-dom";

export default function NavigationLanding() {
  return (
    <div className="navigate__landing-links">
      <Link className="link navigate__landing-link" to="/signup">
        Регистрация
      </Link>
      <Link className="link navigate__button" to="/signin">
        Войти
      </Link>
    </div>
  );
}
