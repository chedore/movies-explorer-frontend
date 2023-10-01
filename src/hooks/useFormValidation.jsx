import { useState, useCallback } from "react";

export function useFormValidation() {
  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setFormValue(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setFormValue, setErrors, setIsValid]
  );

  return {
    formValue,
    handleChange,
    errors,
    isValid,
    resetForm,
    setFormValue,
    setIsValid,
  };
}
