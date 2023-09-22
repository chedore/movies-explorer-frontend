import "./Portfolio.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links">
          <li className="portfolio__item">
            <Link
              className="link portfolio__link"
              rel="noreferrer"
              target="_blank"
              to="https://github.com/chedore/how-to-learn"
            >
              <p className="portfolio__heading">Статичный сайт</p>
              <span className="portfolio__icon">↗</span>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link
              className="link portfolio__link"
              rel="noreferrer"
              target="_blank"
              to="https://github.com/chedore/russian-travel"
            >
              <p className="portfolio__heading">Адаптивный сайт</p>
              <span className="portfolio__icon">↗</span>
            </Link>
          </li>
          <li className="portfolio__item">
            <Link
              className="link portfolio__link"
              rel="noreferrer"
              target="_blank"
              to="https://github.com/chedore/mesto"
            >
              <p className="portfolio__heading">Одностраничное приложение</p>
              <span className="portfolio__icon">↗</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
