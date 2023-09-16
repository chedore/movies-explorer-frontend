import "./Login.css";
import Form from "../Form/Form";

export default function Login() {
  return (
    <section className="login">
      <Form
        title="Рады видеть!"
        buttonName="Войти"
        spanName="Ещё не зарегистрированы?"
        spanLink="Регистрация"
        spanPatch="/signup"
      >
        <div className="login__container">
          <label className="form__label">E-mail</label>
          <input
            type="email"
            id="form-email-input"
            className="form__input"
            placeholder=""
            name="email"
            required
          />
          <span className="form__span">Что-то пошло не так...</span>

          <label className="form__label">Пароль</label>
          <input
            type="password"
            id="form-password-input"
            className="form__input"
            placeholder=""
            name="password"
            required
          />
          <span className="form__span">Что-то пошло не так...</span>
        </div>
      </Form>
    </section>
  );
}
