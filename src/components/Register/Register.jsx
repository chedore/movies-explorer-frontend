import "./Register.css";
import Form from "../Form/Form";
import { useFormValidation } from "../../hooks/useFormValidation";

export default function Register({ onRegister }) {
  const { formValue, handleChange, isValid, errors } = useFormValidation(3);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formValue;
    onRegister(name, email, password);
  };

  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        buttonName="Зарегистрироваться"
        spanName="Уже зарегистрированы?"
        spanLink="Войти"
        spanPatch="/signin"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <div className="register__container">
          <label className="form__label">Имя</label>
          <input
            type="text"
            id="form-name-input"
            className="input form__input"
            placeholder="Введите имя"
            name="name"
            minLength="2"
            maxLength="40"
            required
            onChange={handleChange}
          />
          <span className={`form__span ${errors.name && "form__span-error"}`}>
            {errors.name}
          </span>

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
            placeholder="Придумайте пароль"
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
