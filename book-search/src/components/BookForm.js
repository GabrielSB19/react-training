import React, { useState } from "react";

const BookSearch = ({ handleSearch, option }) => {
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form !== "") {
      handleSearch(form);
      setForm("");
    } else {
      alert("Ingresa un parametro a buscar");
      return;
    }
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Id"
          placeholder={option}
          value={form}
          onChange={handleChange}
        />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default BookSearch;
