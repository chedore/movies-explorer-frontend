import "./Techs.css";
export default function Techs() {
  return (
    <div className="tech">
      <section className="tech__container">
        <h2 className="tech__title">Технологии</h2>
        <p className="line"></p>
        <h2 className="tech__subtitle">7 технологий</h2>
        <p className="tech__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="tech__links">
          <li className="link tech__link">HTML</li>
          <li className="link tech__link">CSS</li>
          <li className="link tech__link">JS</li>
          <li className="link tech__link">React</li>
          <li className="link tech__link">Git</li>
          <li className="link tech__link">Express.js</li>
          <li className="link tech__link">mongoDB</li>
        </ul>
      </section>
    </div>
  );
}
