import React, { useState, useEffect } from "react";
import OptionSearch from "./OptionSearch";
import BookForm from "./BookForm";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";
import BookList from "./BookList";

const BookSearch = () => {
  const [opSearch, setOpSearch] = useState(null);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState(null);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const options = {
        Id: `https://www.etnassoft.com/api/v1/get/?id=${search}`,
        Autor: `https://www.etnassoft.com/api/v1/get/?book_author=${search}`,
        Categoria: `https://www.etnassoft.com/api/v1/get/?category=${search}`,
        "Palabra clave": `https://www.etnassoft.com/api/v1/get/?keyword=${search}`,
        Etiqueta: `https://www.etnassoft.com/api/v1/get/?any_tags=[${search}]`,
      };
      setLoading(true);
      const getData = await helpHttp().get(options[opSearch]);
      setBooks(getData);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  const handleOpSearch = (e) => {
    setOpSearch(e.target.innerHTML);
  };

  const handleSearch = (data) => {
    data = data.toLowerCase().replace(" ", "_");
    setSearch(data);
  };

  return (
    <div>
      <div className="main-container">
        <h2 className="main-container__title">Buscador de Libros</h2>
        <OptionSearch opSearch={opSearch} handleOpSearch={handleOpSearch} />
        {opSearch && <BookForm option={opSearch} handleSearch={handleSearch} />}
        {loading && <Loader />}
      </div>
      <div>{!loading && books && <BookList books={books} />}</div>
    </div>
  );
};

export default BookSearch;
