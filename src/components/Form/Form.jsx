import "./Form.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Form({
  title,
  children,
  buttonName,
  spanName,
  spanLink,
  spanPatch,
  onSubmit,
  isValid,
}) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <Link to="/">
        <img className="logo logo_place_form" src={logo} alt="Логотип" />
      </Link>
      <h1 className="form__title">{title}</h1>
      {children}
      <button className={`button form__button ${!isValid && 'form__button_disabled'}`} type="submit" disabled={!isValid}>
        {buttonName}
      </button>
      <span className="form__span-description">
        {spanName}
        <Link className="link form__span-link" to={spanPatch}>
          {spanLink}
        </Link>
      </span>
    </form>
  );
}
