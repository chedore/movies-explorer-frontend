import "./SearchForm.css";
import button from "../../images/search_form_button.svg";
import CheckBox from "../CheckBox/CheckBox";

export default function SearchForm() {
  return (
    <section className="searchform">
      <div className="searchform__container">
        <form className="searchform__container-form">
          <input
            type="text"
            id="form-searchform-input"
            className="searchform__container-form-input"
            placeholder="Фильм"
            name="search"
            required
          />
          <img
            className="button searchform__container-form-button"
            src={button}
            alt="Поиск"
          />
        </form>
      
        <CheckBox />
      </div>
    </section>
  );
}
