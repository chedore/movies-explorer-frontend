import "./SearchForm.css";
import button from "../../images/search_form_button.svg";
import tumb from "../../images/smalltumb.svg";

export default function SearchForm() {
  return (
    <section className="searchform__container">
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
      <div className="searchform__container-filter">
        <img className="button" src={tumb} alt="Тумблер поиска" />
        <h3 className="searchform__container-filter-title">Короткометражки</h3>
      </div>
    </section>
  );
}
