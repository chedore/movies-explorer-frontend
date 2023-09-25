import "./Header.css";
import { useContext } from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import NavigationLanding from "../Navigation/NavigationLanding/NavigationLanding";
import NavigationProfile from "../Navigation/NavigationProfile/NavigationProfile";
import { CurrentLoggedInContext } from "../../contexts/CurrentLoggedContext";

export default function Header() {
  const loggedIn = useContext(CurrentLoggedInContext);

  return (
    <header className="header">
      <Link to='/' >
        <img className="logo logo_place_header" src={logo} alt="Логотип" />
      </Link>
      {loggedIn? <NavigationProfile /> : <NavigationLanding />}
    </header>
  );
}
