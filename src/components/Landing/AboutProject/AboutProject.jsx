import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="aboutproject__container">
      <h2 className="aboutprojec__title">О проекте</h2>
      <p className="line"></p>
      <ul className="table">
        <li className="table__cell">
          <h3 className="table__heading">Дипломный проект включал 5 этапов</h3>
          <p className="table__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="table__cell">
          <h3 className="table__heading">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="table__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <div className="progressbar__container">
        <div className="progressbar__bacend-width progressbar__bacend">1 неделя</div>
        <div className="progressbar__frontend-width progressbar__frontend">4 недели</div>
      </div>

      <div className="progresstitle__container">
        <p className="progressbar__bacend-width progressbar__title">Back-end</p>
        <p className="progressbar__frontend-width progressbar__title">Front-end</p>
      </div>
    </section>
  );
}
