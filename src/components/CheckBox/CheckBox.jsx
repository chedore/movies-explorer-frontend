import React from "react";
import { useState } from "react";
import './CheckBox.css'

const CheckBox = ({ onFilter }) => {
  const [shorts, setShorts] = useState(false);

  const handleSubmit = () => {
    onFilter(!shorts)
    setShorts(!shorts)
  }
  return (
    <section className='checkbox'>
      <input
        type='checkbox'
        id='checkbox'
        className='button checkbox__input'
        checked={shorts}
        onChange={handleSubmit}
      />
      <label
        htmlFor='checkbox'
        className='checkbox__togle'>Короткометражки</label>
    </section>
  )
}

export default CheckBox;