import "./SearchForm.css";
import { useState, useEffect } from "react";
import button from "../../images/search_form_button.svg";
import CheckBox from "../CheckBox/CheckBox";
import { KEYWORD_NOT_FOUND } from "../../utils/constants";

export default function SearchForm({ onSearch, isShorts, inputSearchDefault }) {
  const [errorMessage, setErrorMessage] = useState("");

  const [formValue, setFormValue] = useState({
    search: inputSearchDefault ?? "",
    isShots: isShorts ?? false,
  });

  useEffect(() => {}, [errorMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleCheckBox = (v) => {
    formValue.isShots = v;
    const { search, isShots } = formValue;
    onSearch(search, isShots);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { search, isShots } = formValue;

    if (search.length === 0) {
      setErrorMessage(KEYWORD_NOT_FOUND);
    } else {
      setErrorMessage("");
    }
    onSearch(search, isShots);
  };

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
            value={formValue.search || ""}
            required
            onChange={handleChange}
          />
          <img
            className="button searchform__container-form-button"
            src={button}
            onClick={handleSubmit}
            alt="Поиск"
          />
        </form>
        <span className={`form__span ${errorMessage && "form__span-error"}`}>
          {KEYWORD_NOT_FOUND}
        </span>

        <CheckBox onFilter={handleCheckBox} isShorts={isShorts} />
      </div>
    </section>
  );
}
