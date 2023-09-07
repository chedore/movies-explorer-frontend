import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <main className="main">
      <h1 className="main__title">404</h1>
      <p className='main__description'>Страница не найдена</p>
      <button
        className='main__button'
        onClick={() => navigate("/", {replace: true})}
        type='button'>
        Назад
      </button>
    </main>
  );
}
