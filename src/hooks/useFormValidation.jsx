import React, { useState } from "react";
import { regexName, regexEmail} from "../utils/constants";

export function useFormValidation() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  const advancedValidation = (name, value, setIsValid, setErrors, errors) => {
    switch (name) {
      case "name":
        if (!regexName.test(value)) {
          setIsValid(false);
          setErrors({
            ...errors,
            [name]: 'Имя может содержать латиницу, кирилицу, дефис и пробел',
          });
        }
        break;
      case "email":
        if (!regexEmail.test(value)) {
          setIsValid(false);
          setErrors({
            ...errors,
            [name]: 'Неверно указан email',
          });
        }
        break;
      case "password":
        break;
      default:
        break;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // заполняем данные формы
    setFormValue({
      ...formValue,
      [name]: value,
    });
    // console.log(e.target.validationMessage)
    // заполняем ошибки
    setErrors({
      ...errors,
      [name]: e.target.validationMessage,
    })
    if (!e.target.validationMessage) advancedValidation(name, value, setIsValid, setErrors, errors);

    // контрольная проверка валидации всей формы
    setIsValid(e.target.closest("form").checkValidity());

  };

  return { formValue, handleChange, isValid, errors };
}
