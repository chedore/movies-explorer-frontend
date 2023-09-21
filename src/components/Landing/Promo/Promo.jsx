import "./Promo.css";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>

        <ul className="promo__links">
          <li>
            <a className="link promo__link" href="#about">
              О проекте
            </a>
          </li>
          <li>
            <a className="link promo__link" href="#tech">
              Технологии
            </a>
          </li>
          <li>
            <a className="link promo__link" href="#student">
              Студент
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
