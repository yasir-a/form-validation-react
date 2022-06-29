import React from "react";
import "./InputBox.css";
const InputBox = ({ id, name, value, type, label, onChange }) => {
  return (
    <div className='input-group'>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <span className='highlight'></span>
      <span className='bar'></span>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default InputBox;
