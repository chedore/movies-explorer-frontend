import "./Login.css";
import Form from "../Form/Form";
import { useFormValidation } from "../../hooks/useFormValidation";

export default function Login({ onLogin }) {
  const { formValue, handleChange, isValid, errors } = useFormValidation();

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
        isValid={true}
      >
        <div className="login__container">
          <label className="form__label">E-mail</label>
          <input
            type="email"
            id="form-email-input"
            className="input form__input"
            placeholder="Введите почту"
            name="email"
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
