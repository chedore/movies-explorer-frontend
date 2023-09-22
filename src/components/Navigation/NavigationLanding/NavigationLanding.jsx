import "./NavigationLanding.css";
import { Link } from "react-router-dom";

export default function NavigationLanding() {
  return (
    <section className="navigatelanding">
    <div className="navigatelanding-links">
      <Link className="link navigatelanding-link" to="/signup">
        Регистрация
      </Link>
      <Link className="link navigatelanding__button" to="/signin">
        Войти
      </Link>
    </div>
    </section>
  );
}
