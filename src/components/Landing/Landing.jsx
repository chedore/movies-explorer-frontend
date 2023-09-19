import "./Landing.css";
import Header from "../Header/Header";
import Promo from "../Landing/Promo/Promo"
import AboutProject from "./AboutProject/AboutProject";

export default function Landing() {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <AboutProject />
      </main>
    </>
  );
}
