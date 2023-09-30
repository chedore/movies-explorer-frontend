import { useState , useEffect} from "react";
import { regexName, regexEmail } from "../utils/constants";

export function useFormValidation(limit = 3) {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [validations, setValidations] = useState({
    name: false,
    email: false,
    password: false,
    isResValid() {
      return this.name + this.email + this.password === limit;
    },
  });

  const advancedValidation = (name, value, setErrors, errors, validations) => {
    switch (name) {
      case "name":
        validations[name] = regexName.test(value);
        if (!regexName.test(value)) {
          setErrors({
            ...errors,
            [name]: "Имя может содержать латиницу, кирилицу, дефис и пробел",
          });
        }
        break;
      case "email":
        validations[name] = regexEmail.test(value);
        if (!regexEmail.test(value)) {
          setErrors({
            ...errors,
            [name]: "Неверно указан email",
          });
        }
        break;
      case "password":
        validations[name] = true;
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
    validations[name] = e.target.checkValidity();
    // setValidations({
    //   ...validations,
    //   [name]: e.target.checkValidity(),
    // });

    if (!e.target.validationMessage) {
      advancedValidation(name, value, setErrors, errors, validations);
    } else validations[name] = false;

    setIsValid(validations.isResValid());
  };

  return { formValue, handleChange, isValid, errors , setFormValue, setIsValid};
}
