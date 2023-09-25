import "./SearchForm.css";
import {useState} from 'react';
import button from "../../images/search_form_button.svg";
import CheckBox from "../CheckBox/CheckBox";

export default function SearchForm({ onSearch}) {
  const [formValue, setFormValue] = useState({
    search: '',
    isShortFilms: false
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value)

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { search, isShortFilms } = formValue;
    onSearch(search, isShortFilms)
    console.log('тут', search, isShortFilms)
  }

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
            onChange={handleChange}
          />
          <img
            className="button searchform__container-form-button"
            src={button}
            onClick={handleSubmit}
            alt="Поиск"
          />
        </form>
      
        <CheckBox />
      </div>
    </section>
  );
}
