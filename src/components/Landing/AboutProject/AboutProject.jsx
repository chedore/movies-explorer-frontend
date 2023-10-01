import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="aboutproject" id="about">
      <div className="aboutproject__container">
        <h2 className="aboutproject__title">О проекте</h2>
        <ul className="table">
          <li className="table__cell">
            <h3 className="table__heading">
              Дипломный проект включал 5 этапов
            </h3>
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

        <div className="progressbar">
          <h4 className="progressbar__bacendwidth progressbar__bacend">
            1 неделя
          </h4>
          <h4 className="progressbar__frontendwidth progressbar__frontend">
            4 недели
          </h4>
        </div>

        <div className="progressbar">
          <p className="progressbar__bacendwidth progressbar__title">
            Back-end
          </p>
          <p className="progressbar__frontendwidth progressbar__title">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}
