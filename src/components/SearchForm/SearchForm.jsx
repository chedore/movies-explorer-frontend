import "./SearchForm.css";
import { useState } from "react";
import button from "../../images/search_form_button.svg";
import CheckBox from "../CheckBox/CheckBox";

export default function SearchForm({onSearch, isShorts, inputSearchDefault}) {
  const [formValue, setFormValue] = useState({
    search: inputSearchDefault ?? '',
    isShots: isShorts ?? false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleCheckBox = (v) => {
    formValue.isShots = v
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { search, isShots } = formValue;
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
            value={formValue.search || ''}
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

        <CheckBox onFilter={handleCheckBox} isShorts={isShorts}/>
      </div>
    </section>
  );
}
