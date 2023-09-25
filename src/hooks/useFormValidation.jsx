import { useState } from "react";
import { regexName, regexEmail } from "../utils/constants";

export function useFormValidation() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(true);
  const [errors, setErrors] = useState({});
  const [validations, setValidations] = useState({
    name: false,
    email: false,
    password: false,
    isResValid() {
      return this.name + this.email + this.password === 3;
    },
  });

  const advancedValidation = (
    name,
    value,
    setErrors,
    errors,
    setValidations,
    validations
    
  ) => {
    switch (name) {
      case "name":
        if (!regexName.test(value)) {

          setValidations({
            ...validations,
            [name]: false,
          });
          setErrors({
            ...errors,
            [name]: "Имя может содержать латиницу, кирилицу, дефис и пробел",
          });
        }
        break;
      case "email":
        if (!regexEmail.test(value)) {
          setValidations({
            ...validations,
            [name]: false,
          });
          setErrors({
            ...errors,
            [name]: "Неверно указан email",
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

    // заполняем ошибки
    setErrors({
      ...errors,
      [name]: e.target.validationMessage,
    });

    // заполняем валидацию
    setValidations({
      ...validations,
      [name]: e.target.checkValidity(),
    });

    
    if (!e.target.validationMessage)
      advancedValidation(name, value, setErrors, errors, setValidations, validations);
    setIsValid(validations.isResValid());
  };

  return { formValue, handleChange, isValid, errors };
}
