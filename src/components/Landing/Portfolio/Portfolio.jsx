import "./Portfolio.css";
import { Link } from "react-router-dom";
import photo from "../../../images/arrow_icon.svg";

export default function Portfolio() {
  return (
    <section className="portfolio__container">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li>
          <Link className="link portfolio__link portfolio__item" rel='noreferrer' to="https://github.com/chedore/how-to-learn">
            <p className="portfolio__heading">Статичный сайт</p>
            <img className="portfolio__icon" src={photo} alt="стрелка" />
          </Link>
        </li>
        <li>
          <Link className="link portfolio__link portfolio__item" rel='noreferrer' to="https://github.com/chedore/russian-travel">
            <p className="portfolio__heading">Адаптивный сайт</p>
            <img className="portfolio__icon" src={photo} alt="стрелка" />
          </Link>
        </li>
        <li>
          <Link className="link portfolio__link portfolio__item" rel='noreferrer' to="https://github.com/chedore/mesto">
            <p className="portfolio__heading">Одностраничное приложение</p>
            <img className="portfolio__icon" src={photo} alt="стрелка" />
          </Link>
        </li>
      </ul>
    </section>
  );
}
