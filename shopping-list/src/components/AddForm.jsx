import { useState } from "react";
import React from 'react'
import "../styles/AddForm.css";

const AddForm = ({addItem}) => {
  const [value, setValue] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    if (value) {
      // console.log(value);
      addItem(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={submitForm} className="AddForm">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="add-form-input" placeholder="Add a new item" />
      <button type="submit" className="add-btn">Add</button>
    </form>
  )
}

export default AddForm;