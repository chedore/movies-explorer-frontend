import "./Header.css";
import logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import NavigationLanding from "../Navigation/NavigationLanding/NavigationLanding";
import NavigationProfile from "../Navigation/NavigationProfile/NavigationProfile";

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header">
      <Link to='/' >
        <img className="logo logo_place_header" src={logo} alt="Логотип" />
      </Link>
      {path === '/' ? <NavigationLanding /> : <NavigationProfile />}
    </header>
  );
}
