import React, { useState } from "react";

const OptionSearch = ({opSearch, handleOpSearch}) => {



  return (
    <div className="option-container">
      <h3 className="option-selected">
        {opSearch === null
          ? "Escoje de que forma deseas buscar los libros"
          : `Estas buscando por: ${opSearch}`}
      </h3>
      <nav>
        <button onClick={handleOpSearch}>Id</button>
        <button onClick={handleOpSearch}>Categoria</button>
        <button onClick={handleOpSearch}>Etiqueta</button>
        <button onClick={handleOpSearch}>Palabra clave</button>
        <button onClick={handleOpSearch}>Autor</button>
      </nav>
    </div>
  );
};

export default OptionSearch;
