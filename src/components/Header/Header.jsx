import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

export default function Header({loggedIn}) {
  return (
    <header className="header">
      <img className="logo logo_place_header" src={logo} alt="Логотип" />
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}
