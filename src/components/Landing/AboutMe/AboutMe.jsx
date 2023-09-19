import "./AboutMe.css";
import photo from "../../../images/photo.png";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <section className="aboutme__container">
      <h2 className="aboutme__title">Студент</h2>
      <p className="line"></p>
      <div className="student__info">
        <div className="student__content">
          <h3 className="student__content-name">Виталий</h3>
          <p className="student__content-job">Фронтенд-разработчик, 30 лет</p>
          <p className="student__content-description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link to="https://github.com/chedore" className="link student__content-link" rel='noreferrer'>
            Github
          </Link>
        </div>
        <img className="student__photo" src={photo} alt="Фотография студента" />
      </div>
    </section>
  );
}
