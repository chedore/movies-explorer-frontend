import "./Form.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Form({ title, children, buttonName, spanName, spanLink, spanPatch }) {
  return (
    <form className="form">
      <img className="logo logo_place_form" src={logo} alt="Логотип" />
      <h1 className="form__title">{title}</h1>
      {children}
      <button className="button form__button" type="submit">
        {buttonName}
      </button>
      <span className="form__span-description">
        {spanName}
        <Link className="link form__span-link" to={spanPatch}>{spanLink}</Link> 
      </span>
    </form>
  );
}
