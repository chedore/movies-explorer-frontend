import "./AboutProject.css";

export default function AboutProject() {
  return (
    <div className="aboutproject__container">
      <h2 className="aboutprojec__title">О проекте</h2>
      <p className="line"></p>
      <ul className="table">
        <li className="table__cell">
          <h3 className="table__heading">Дипломный проект включал 5 этапов</h3>
          <p className="table__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="table__cell">
          <h3 className="table__heading">На выполнение диплома ушло 5 недель</h3>
          <p className="table__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
   
    </div>
  );
}
