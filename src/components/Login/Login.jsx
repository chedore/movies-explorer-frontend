import "./Login.css";
import Form from "../Form/Form";
import { useFormValidation } from "../../hooks/useFormValidation";

export default function Login({ onLogin }) {
  const {
    formValue, handleChange, errors, isValid,
  } = useFormValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValue;
    onLogin(email, password);
  };

  return (
    <main className="login">
      <Form
        title="Рады видеть!"
        buttonName="Войти"
        spanName="Ещё не зарегистрированы?"
        spanLink="Регистрация"
        spanPatch="/signup"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <div className="login__container">
          <label className="form__label">E-mail</label>
          <input
            type="email"
            id="form-email-input"
            className="input form__input"
            placeholder="Введите почту"
            name="email"
            autoComplete="off"
            required
            onChange={handleChange}
          />
          <span className={`form__span ${errors.email && "form__span-error"}`}>
            {errors.email}
          </span>

          <label className="form__label">Пароль</label>
          <input
            type="password"
            id="form-password-input"
            className="input form__input"
            placeholder="Введите пароль"
            name="password"
            minLength="2"
            maxLength="40"
            autoComplete="off"
            required
            onChange={handleChange}
          />
          <span
            className={`form__span ${errors.password && "form__span-error"}`}
          >
            {errors.password}
          </span>
        </div>
      </Form>
    </main>
  );
}
