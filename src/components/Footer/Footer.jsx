import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        {/* <p className="line"></p> */}
        <nav className="footer__group">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__links">
            <li>
              <Link
                className="link footer__link"
                rel="noreferrer"
                target="_blank"
                to="https://practicum.yandex.ru"
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li>
              <Link
                className="link footer__link"
                rel="noreferrer"
                target="_blank"
                to="https://github.com/chedore"
              >
                Github
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
