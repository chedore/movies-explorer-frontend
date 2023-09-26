import { useState , useContext} from "react";
import { regexName, regexEmail } from "../utils/constants";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


export function useFormValidation(limit=3) {
  const user = useContext(CurrentUserContext);
  const [formValue, setFormValue] = useState({
    name: user.name || "",
    email: user.email || "",
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

  const advancedValidation = (
    name,
    value,
    setErrors,
    errors,
    validations
    
  ) => {
    validations[name]=(!regexName.test(value))
    switch (name) {
      case "name":
        if (!regexName.test(value)) {
          setErrors({
            ...errors,
            [name]: "Имя может содержать латиницу, кирилицу, дефис и пробел",
          });
        }
        break;
      case "email":
        if (!regexEmail.test(value)) {
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
      advancedValidation(name, value, setErrors, errors, validations);
    else
      validations[name]=false

    setIsValid(validations.isResValid());
  };

  return { formValue, handleChange, isValid, errors };
}
