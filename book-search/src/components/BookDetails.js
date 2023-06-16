import React from "react";

const BookDetails = ({ el }) => {
  console.log(el);
  const {
    ID,
    author,
    categories,
    language,
    pages,
    publisher,
    publisher_date,
    tags,
    title,
    url_download,
  } = el;

  return (
    <div className="container-book">
      <div className="information-main-book">
        <h3>{title}</h3>
        <h4>ID: {ID}</h4>
        <h4>Autores: {author}</h4>
      </div>
      <div className="more-data-book">
        <p>Idioma: {language}</p>
        <p>Paginas: {pages}</p>
        <p>Fecha de publicacion: {publisher_date}</p>
      </div>
      <p className="list-item-book">Categorias:</p>
      <ol>
        {categories.map((el, index) => (
          <li key={index}>{el.name}</li>
        ))}
      </ol>
      <p className="list-item-book">Etiquetas:</p>
      <ol>
        {tags.map((el, index) => (
          <li key={index}>{el.name}</li>
        ))}
      </ol>
      <p>Recuperado de: {publisher}</p>
      <a href={url_download}>Descargar libro</a>
    </div>
  );
};

export default BookDetails;
