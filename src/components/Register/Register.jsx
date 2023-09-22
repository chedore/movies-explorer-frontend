import "./Register.css";
import Form from "../Form/Form";

export default function Register() {
  return (
    <main className="register">
      <Form
        title="Добро пожаловать!"
        buttonName="Зарегистрироваться"
        spanName="Уже зарегистрированы?"
        spanLink="Войти"
        spanPatch="/signin"
      >
        <div className="register__container">
          <label className="form__label">Имя</label>
          <input
            type="text"
            id="form-name-input"
            className="input form__input"
            placeholder="Введите имя"
            name="name"
            minLength='2'
            maxLength='40'
            required
          />
          <span className="form__span">Что-то пошло не так...</span>

          <label className="form__label">E-mail</label>
          <input
            type="email"
            id="form-email-input"
            className="input form__input"
            placeholder="Введите почту"
            name="email"
            required
          />
          <span className="form__span">Что-то пошло не так...</span>

          <label className="form__label">Пароль</label>
          <input
            type="password"
            id="form-password-input"
            className="input form__input"
            placeholder="Придумайте пароль"
            name="password"
            minLength='2'
            maxLength='40'
            required
          />
          <span className="form__span">Что-то пошло не так...</span>
        </div>
      </Form>
    </main>
  );
}
