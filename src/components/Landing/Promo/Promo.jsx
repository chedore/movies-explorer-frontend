import "./Promo.css";
import { Link } from "react-router-dom";

export default function Promo() {
  return (
    <div className="promo__container">
      <h1 className="promo___title">
        Учебный проект студента факультета Веб-разработки.
      </h1>

      <div className="promo__links">
        <Link className="link promo__link">О проекте</Link>
        <Link className="link promo__link">Технологии</Link>
        <Link className="link promo__link">Студент</Link>
      </div>
    </div>
  );
}
